import GameInfoList from "./GameInfoList";

export default function LeaderBoard({ route }: { route: string}) {
  return (
    <>
      <div className="grid w-full justify-center">
        <div className="grid w-[500px] p-4">
          <GameInfoList route={route}/>
          </div>
      </div>
    </>
  );
}