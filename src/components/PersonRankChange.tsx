export function PersonRankChange(props: { diff: number }) {
  const absDiff = Math.abs(props.diff);

  if (props.diff > 0) {
    return <span className="badge text-bg-success">&#9650; {absDiff}</span>;
  }

  if (props.diff < 0) {
    return <span className="badge text-bg-danger">&#9660; {absDiff}</span>;
  }

  return <></>;
}
