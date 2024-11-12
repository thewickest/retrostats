import ProfileInfo from "src/components/profile/ProfileInfo";

export default function Profile() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex-initial w-[800px] p-4 space-y-4">
          <ProfileInfo />
        </div>
      </div>
    </>
  )
}