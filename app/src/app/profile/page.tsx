import { Suspense } from "react";
import LeaderboardInfoList from "src/components/leaderboard/LeaderboardInfoList";
import Loading from "src/components/leaderboard/loading";
import ProfileInfo from "src/components/profile/ProfileInfo";
import useApi from "src/lib/hooks/useApi";

export default async function Profile() {
  const email = 'test@gmail.com' //TODO change this
  const res = await useApi('players', { email: email })
  const {username, profilePicture, badges, featuredBadges } = res?.data[0]?.attributes || {}

  const profileInfo = { username: username, level: 8, hours: 9086}
  const profileImage = profilePicture?.data || {}
  const totalBadges = badges?.data || []
  const savedBadges = featuredBadges?.data || []

  return (
    <>
      <div className="flex flex-initial flex-col w-full justify-center p-4 space-y-4">
          <ProfileInfo profileInfo={profileInfo} image={profileImage} badges={totalBadges} featuredBadges={savedBadges}/>
          <div className="flex items-start sm:space-x-4 max-sm:flex-wrap max-sm:space-y-4">
            <div className="grow max-sm:w-full">
              <Suspense fallback={<Loading />}>
                <LeaderboardInfoList />
              </Suspense>
            </div>
            <div className="flex-initial max-sm:w-full">
              <div className="border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5 font-base h-full">
                {/* <Badges />
                <Badges />
                <Badges /> */}
              </div>
            </div>
          </div>
      </div>
    </>
  )
}