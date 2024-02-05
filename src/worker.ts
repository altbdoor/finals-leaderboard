import sqlite3InitModule, { Database } from "@sqlite.org/sqlite-wasm";
import { InputPerson } from "./models/Person";

let isInit = false;
let globDb: Database | undefined = undefined;

const openPorts: MessagePort[] = [];
let dbCount = 0;

self.addEventListener("connect", async (evt) => {
  const port = (evt as any).ports[0] as MessagePort;
  openPorts.push(port);

  port.addEventListener("close", () => {
    const index = openPorts.indexOf(port);
    if (index !== -1) {
      openPorts.splice(index, 1);
    }
  });

  if (!isInit) {
    try {
      globDb = await initCode();
      isInit = true;

      const count = globDb.exec({
        sql: "SELECT COUNT(*) FROM persons;",
        returnValue: "resultRows",
      });
      dbCount = count[0][0] as number;

      port.postMessage({ status: "ready", data: dbCount });
    } catch (err) {
      console.error(err);
      port.postMessage({ status: "error" });
    }
  } else {
    if (dbCount > 0) {
      port.postMessage({ status: "ready", data: dbCount });
    } else {
      port.postMessage({ status: "error" });
    }
  }

  port.onmessage = async (portEvt) => {
    const query: string = portEvt.data;
    const data = globDb!.exec({
      sql: "SELECT * FROM persons WHERE LOWER(name) LIKE ? ORDER BY rank ASC LIMIT 50;",
      bind: `%${query.toLowerCase()}%`,
      returnValue: "resultRows",
      rowMode: "object",
    });

    port.postMessage({ status: "result", data });
  };
});

async function initCode() {
  const sqlite = await sqlite3InitModule();
  const db = new sqlite.oo1.DB("/leaderboard.sqlite", "c");

  db.exec(`
    CREATE TABLE persons (
      name TEXT NOT NULL PRIMARY KEY,
      rank INTEGER NOT NULL,
      fame INTEGER NOT NULL,
      original_fame INTEGER NOT NULL,
      original_rank INTEGER NOT NULL,
      cashout INTEGER NOT NULL,
      steam TEXT NOT NULL,
      xbox TEXT NOT NULL,
      psn TEXT NOT NULL
    );
  `);

  const dataUrl =
    "https://storage.googleapis.com/embark-discovery-leaderboard/leaderboard-crossplay-discovery-live.json";

  const rawKeys = [
    "name",
    "r",
    "f",
    "of",
    "or",
    "c",
    "steam",
    "xbox",
    "psn",
  ] as const;

  const data: InputPerson[] = await fetch(dataUrl).then((res) => res.json());
  const insertPerson = db.prepare(
    `INSERT INTO persons VALUES (${rawKeys.map(() => "?").join(", ")});`,
  );

  db.exec("BEGIN TRANSACTION;");
  try {
    data.forEach((datum) => {
      insertPerson.bind(rawKeys.map((key) => datum[key])).stepReset();
    });
    db.exec("COMMIT;");
  } catch (err) {
    console.error(err);
    db.exec("ROLLBACK;");
  }

  return db;
}
