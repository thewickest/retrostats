import ProfilePicture from "src/base/icon/ProfilePicture";
import Level from "./Level";
import Badges from "./Badges";

export default function ProfileInfo() {
  return (
    <>
      <div className="space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5 font-base">
        <div className="flex space-x-4 items-center">
          <ProfilePicture imageUrl='/profile.png' />
          <div className="flex flex-col flex-auto items-center justify-center">
            <div className="flex items-center text-2xl font-heading text-left w-full">algrlo<Level level={8} percentage={80}></Level></div>
            <div className="font-base w-full">1574738 hours played</div>
          </div>
          <div className="flex w-40">
            <Badges />
          </div>
        </div>
      </div>
    </>
  )
}