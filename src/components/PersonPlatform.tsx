import PlaystationIcon from "../assets/icons/playstation.svg?url";
import SteamIcon from "../assets/icons/steam.svg?url";
import XboxIcon from "../assets/icons/xbox.svg?url";

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
              <img src={SteamIcon} width={16} alt="Steam" />
              {props.steam}
            </span>
          </span>{" "}
        </>
      )}

      {!!props.xbox && (
        <>
          <span className="badge text-bg-success">
            <span className="text-light d-flex align-items-center gap-2">
              <img src={XboxIcon} width={16} alt="Xbox" />
              {props.xbox}
            </span>
          </span>{" "}
        </>
      )}

      {!!props.psn && (
        <>
          <span className="badge text-bg-primary">
            <span className="text-light d-flex align-items-center gap-2">
              <img src={PlaystationIcon} width={16} alt="PSN" />
              {props.psn}
            </span>
          </span>{" "}
        </>
      )}
    </>
  );
}
