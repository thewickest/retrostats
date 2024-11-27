import ProfilePicture from "src/base/icon/ProfilePicture";
import Level from "./Level";
import Badges from "./Badges";

export default function ProfileInfo() {
  return (
    <>
      <div className="space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-4 sm:p-5 font-base">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-auto">
            <div className="flex-none">
              <ProfilePicture imageUrl='/profile.png' />
            </div>
            <div className="flex flex-col flex-auto justify-center px-2">
              <div className="flex items-center text-2xl font-heading text-left">algrlo<Level level={8} percentage={80}></Level></div>
              <div className="font-base text-left">1574738 hours played</div>
            </div>
          </div>
          <div className="flex flex-auto justify-center">
            <Badges />
          </div>
        </div>
      </div>
    </>
  )
}