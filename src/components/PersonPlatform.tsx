interface PersonPlatformProps {
  steam?: string;
  xbox?: string;
  psn?: string;
}

export function PersonPlatform(props: PersonPlatformProps) {
  return (
    <>
      {!!props.steam && (
        <>
          <span className="badge text-bg-dark">
            <span className="text-light d-flex align-items-center gap-2">
              <img src="/icons/steam.svg" width={16} alt="Steam" />
              {props.steam}
            </span>
          </span>{" "}
        </>
      )}

      {!!props.xbox && (
        <>
          <span className="badge text-bg-success">
            <span className="text-light d-flex align-items-center gap-2">
              <img src="/icons/xbox.svg" width={16} alt="Xbox" />
              {props.xbox}
            </span>
          </span>{" "}
        </>
      )}

      {!!props.psn && (
        <>
          <span className="badge text-bg-primary">
            <span className="text-light d-flex align-items-center gap-2">
              <img src="/icons/playstation.svg" width={16} alt="PSN" />
              {props.psn}
            </span>
          </span>{" "}
        </>
      )}
    </>
  );
}
