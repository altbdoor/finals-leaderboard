interface League {
  fame: number;
  name: string;
}

// https://github.com/leonlarsson/the-finals-leaderboard/blob/main/src/helpers/leagues.ts
const LIVE_LEAGUES: League[] = [
  { fame: 0, name: "Bronze 4" },
  { fame: 250, name: "Bronze 3" },
  { fame: 500, name: "Bronze 2" },
  { fame: 1_000, name: "Bronze 1" },

  { fame: 1_750, name: "Silver 4" },
  { fame: 2_500, name: "Silver 3" },
  { fame: 3_500, name: "Silver 2" },
  { fame: 4_500, name: "Silver 1" },

  { fame: 6_500, name: "Gold 4" },
  { fame: 8_500, name: "Gold 3" },
  { fame: 10_500, name: "Gold 2" },
  { fame: 12_500, name: "Gold 1" },

  { fame: 15_500, name: "Platinum 4" },
  { fame: 18_500, name: "Platinum 3" },
  { fame: 21_500, name: "Platinum 2" },
  { fame: 24_500, name: "Platinum 1" },

  { fame: 28_500, name: "Diamond 4" },
  { fame: 32_750, name: "Diamond 3" },
  { fame: 37_250, name: "Diamond 2" },
  { fame: 42_250, name: "Diamond 1" },
];

export function fameToRank(fame: number): League | undefined {
  for (let i = LIVE_LEAGUES.length - 1; i >= 0; i--) {
    if (fame >= LIVE_LEAGUES[i].fame) {
      return LIVE_LEAGUES[i];
    }
  }

  return undefined;
}
