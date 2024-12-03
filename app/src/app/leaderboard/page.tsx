import React, { Suspense } from 'react'
import LeaderboardInfoList from 'src/components/leaderboard/LeaderboardInfoList';
import Loading from 'src/components/leaderboard/loading';

export default function Leaderboard() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex-initial w-full p-4">
            <Suspense fallback={<Loading />}>
              <LeaderboardInfoList />
            </Suspense>
          </div>
      </div>
    </>
  );
}