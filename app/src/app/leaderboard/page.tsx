import React from 'react'
import LeaderboardInfoList from 'src/components/leaderboard/LeaderboardInfoList';

export default function Leaderboard() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex-initial w-full p-4">
            <LeaderboardInfoList />
          </div>
      </div>
    </>
  );
}