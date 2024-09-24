import LeaderboardInfoList from "./LeaderboardInfoList";


export default function Leaderboard({ route }: { route: string}) {
  return (
    <>
      <div className="grid w-full justify-center">
        <div className="grid w-[800px] p-4">
            <LeaderboardInfoList route={route}/>
          </div>
      </div>
    </>
  );
}