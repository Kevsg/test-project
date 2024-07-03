import React from "react";

export type Leaderboard = {
    username: string,
    score: string
}

const LeaderboardContext = React.createContext({ leaderboard: Array<Leaderboard>, setLeaderboard: (leaderboard: Leaderboard) => { } })

export default LeaderboardContext