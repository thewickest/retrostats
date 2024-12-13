import { authConfig } from "auth";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import LeaderboardInfoList from "src/components/leaderboard/LeaderboardInfoList";
import Loading from "src/components/leaderboard/loading";
import BadgesGrid from "src/components/profile/BadgesGrid";
import ProfileInfo from "src/components/profile/ProfileInfo";
import useApi from "src/lib/hooks/useApi";

export default async function Profile() {
  const session = await getServerSession(authConfig)
  if(!session?.user) return (<></>)

  const email = session?.user?.email
  //TODO change this way of authentificate against the API after 0Auth
  const res = await useApi('players', { email: email })
  const {data: badges = {} } = await useApi('badges')
  const {
    username, 
    profilePicture: { 
      data: profileImage = {}
    } = {}, 
    badges: {
      data: profileBadges = []
    } = {},
    featuredBadges: {
      data: featuredBadges = []
    } = {}
  } = res?.data[0]?.attributes || {}

  //TODO profile info
  const profileInfo = { username: username, level: 8, hours: 9086}

  return (
    <div className="flex flex-initial flex-col w-full justify-center p-4 space-y-4">
        <ProfileInfo profileInfo={profileInfo} image={profileImage} badges={profileBadges} featuredBadges={featuredBadges}/>
        <div className="flex items-start sm:space-x-4 max-sm:flex-wrap max-sm:space-y-4">
          <div className="grow max-sm:w-full">
            <Suspense fallback={<Loading />}>
              <LeaderboardInfoList user={username}/>
            </Suspense>
          </div>
          <div className="flex-initial w-1/4 max-sm:w-full">
            <BadgesGrid profileBadges={profileBadges} badges={badges}/>
          </div>
        </div>
    </div>
  )
}