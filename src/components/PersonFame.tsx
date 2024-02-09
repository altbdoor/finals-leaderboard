import { fameToRank } from "../helpers/fame-to-rank";

export function PersonFame(props: { fame: number }) {
  const rank = fameToRank(props.fame);

  if (!rank) {
    return <></>;
  }

  const imgName = rank.name.toLowerCase().replace(/\s+/, "-");
  const fameFormatted = props.fame.toLocaleString("en");

  return (
    <div className="d-flex align-items-center gap-2">
      <img
        src={`https://storage.googleapis.com/embark-discovery-leaderboard/img/${imgName}.png`}
        width={48}
        height={48}
        alt={rank.name}
      />
      <div className="small">
        {rank.name} <br />
        <span className="tabular-nums">{fameFormatted}</span>
      </div>
    </div>
  );
}
