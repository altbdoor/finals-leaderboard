import { useEffect, useRef, useState } from "react";
import { Attribution } from "./components/Attribution";
import { PersonTable } from "./components/PersonTable";
import { getParams } from "./helpers/get-params";
import { Person } from "./models/Person";
import { PortData } from "./models/PortData";
import Worker from "./worker?sharedworker";

export function App() {
  const workerRef = useRef<SharedWorker>();

  const [count, setCount] = useState(-1);
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    const worker = new Worker();
    worker.port.onmessage = (evt) => {
      const response: PortData = evt.data;

      if (response.status === "ready") {
        setCount(response.data);
        queryWorker();
        return;
      }

      if (response.status === "result") {
        setPersons(response.data);
        return;
      }

      if (response.status === "error") {
        setCount(0);
        console.error("Error");
      }
    };

    workerRef.current = worker;
    return () => worker.port.close();
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", queryWorker);
    return () => window.removeEventListener("hashchange", queryWorker);
  }, []);

  const queryWorker = () => {
    const params = getParams();
    const worker = workerRef.current!;
    worker.port.postMessage(params.get("query") ?? "");
  };

  const handleSearch = (query: string) => {
    const params = getParams();
    params.set("query", query);

    window.history.replaceState(null, "", "#" + params.toString());
    queryWorker();
  };

  return (
    <>
      <div className="sticky-top bg-white shadow-sm">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <label className="form-label d-none d-md-block">
                Search by name
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={getParams().get("query") ?? ""}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
                placeholder="Type to search by name"
              />
              {count > 0 && (
                <div className="form-text">
                  Showing {persons.length} / {count} entries
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-8 mx-auto">
            {count === -1 && <div className="alert alert-info">Loading...</div>}
            {count === 0 && <div className="alert alert-warning">No data</div>}
            {count > 0 && <PersonTable persons={persons} />}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Attribution />
          </div>
        </div>
      </div>
    </>
  );
}
