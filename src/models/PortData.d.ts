import { Person } from "./Person";

type Ready = { status: "ready"; data: number };
type Error = { status: "error" };
type Result = { status: "result"; data: Person[] };

export type PortData = Ready | Error | Result;
