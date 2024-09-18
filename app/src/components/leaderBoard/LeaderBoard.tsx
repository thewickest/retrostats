import GameInfoList from "./GameInfoList";

export default function LeaderBoard() {
  return (
    <>
      <div className="grid w-full justify-center">
        <div className="grid w-[500px] p-4">
          <GameInfoList/>
          </div>
      </div>
    </>
  );
}