import { Person } from "../models/Person";
import { PersonFame } from "./PersonFame";
import { PersonPlatform } from "./PersonPlatform";
import { PersonRankChange } from "./PersonRankChange";

interface PersonTableProps {
  persons: Person[];
}

export function PersonTable(props: PersonTableProps) {
  return (
    <div className="d-flex flex-column gap-2">
      {props.persons.map((person) => (
        <div className="card" key={person.name}>
          <div className="card-body d-flex gap-3">
            <div className="d-flex flex-column align-items-center gap-1">
              <h3 className="mb-0">#{person.rank}</h3>
              <PersonRankChange diff={person.original_rank - person.rank} />
            </div>

            <div className="d-flex flex-column flex-md-row w-100 gap-2">
              <div>
                <div className="mb-1">{person.name}</div>
                <PersonPlatform
                  steam={person.steam}
                  xbox={person.xbox}
                  psn={person.psn}
                />
              </div>

              <div className="ms-md-auto">
                <PersonFame fame={person.fame} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
