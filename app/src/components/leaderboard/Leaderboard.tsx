import LeaderboardInfoList from "./LeaderboardInfoList";


export default function Leaderboard({ route }: { route: string}) {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex-initial w-[800px] p-4">
            <LeaderboardInfoList route={route}/>
          </div>
      </div>
    </>
  );
}