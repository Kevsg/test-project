import React from "react";

export type Leaderboard = {
    username: string,
    score: string
}

const LeaderboardContext = React.createContext({ leaderboard: [], setLeaderboard: (leaderboard: Leaderboard) => { } })

export default LeaderboardContext