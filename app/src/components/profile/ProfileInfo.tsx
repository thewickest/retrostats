import Button from "src/base/button/Button";
import ProfilePicture from "src/base/icon/ProfilePicture";

export default function ProfileInfo() {
  return (
    <div className="space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5 font-base">
      <div className="flex space-x-4">
        <ProfilePicture imageUrl='/profile.png'></ProfilePicture>
        <div className="flex flex-col flex-auto items-center justify-center">
          <div className="text-2xl font-heading text-left w-full">algrlo</div>
          <div className="font-base w-full">1574738 hours played</div>
        </div>
        <div className="flex-initial w-32">
          <p>Level 17</p>
          <p>badges</p>
          <Button>Edit Profile</Button>
        </div>
      </div>
    </div>
  )
}