import { useEffect, useRef, useState } from "react";
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
      <div className="row">
        <div className="col-md-3 sticky-top bg-white shadow-sm">
          <div className="pt-3 pb-md-3 sticky-top">
            <div className="mb-3">
              <label className="form-label">Search by name</label>
              <input
                type="text"
                className="form-control"
                defaultValue={getParams().get("query") ?? ""}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
                placeholder="e.g., John Doe"
              />
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="py-3">
            {count === -1 && <div className="alert alert-info">Loading...</div>}
            {count === 0 && <div className="alert alert-warning">No data</div>}
            {count > 0 && <PersonTable persons={persons} />}
          </div>
        </div>
      </div>
    </>
  );
}
