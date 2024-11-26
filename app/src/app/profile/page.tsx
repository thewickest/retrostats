import LeaderboardInfoList from "src/components/leaderboard/LeaderboardInfoList";
import Badges from "src/components/profile/Badges";
import ProfileInfo from "src/components/profile/ProfileInfo";

export default function Profile() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex-initial flex-col w-[800px] p-4 space-y-4">
          <ProfileInfo />
          <div className="flex items-start sm:space-x-4 max-sm:flex-wrap max-sm:space-y-4">
            <div className="grow max-sm:w-full">
              <LeaderboardInfoList />
            </div>
            <div className="flex-initial max-sm:w-full">
              <div className="border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5 font-base h-full">
                <Badges />
                <Badges />
                <Badges />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}