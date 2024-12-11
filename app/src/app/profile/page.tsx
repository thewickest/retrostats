import { auth } from "auth";
import { useSession } from "next-auth/react";
import { Suspense } from "react";
import LeaderboardInfoList from "src/components/leaderboard/LeaderboardInfoList";
import Loading from "src/components/leaderboard/loading";
import BadgesGrid from "src/components/profile/BadgesGrid";
import ProfileInfo from "src/components/profile/ProfileInfo";
import useApi from "src/lib/hooks/useApi";

export default async function Profile() {
  // const { data: session, status } = useSession()
  // //TODO add a proper component
  // if(!session?.user) return (<p>You are logged in</p>)

  const email = 'test@gmail.com' //TODO change this
  const res = await useApi('players', { email: email })
  const badges = await useApi('badges')
  const {username, profilePicture, badges: profileBadges, featuredBadges } = res?.data[0]?.attributes || {}

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
            <div className="flex-initial w-1/4 max-sm:w-full">
              <BadgesGrid profileBadges={profileBadges?.data} totalBadges={totalBadges}/>
            </div>
          </div>
      </div>
    </>
  )
}