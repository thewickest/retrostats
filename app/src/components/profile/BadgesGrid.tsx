import Badge from "src/base/icon/Badge"
import { StrapiBadge } from "./ProfileInfo"
import _ from 'lodash'

export default function BadgesGrid({totalBadges, profileBadges }: {totalBadges: StrapiBadge[], profileBadges: StrapiBadge[]}) {
  return (
    <div className="flex flex-wrap justify-center border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5 font-base h-full">
      {totalBadges?.map((item, index)=>{
        const isObtained = _.find(profileBadges, (el) => el?.id === item?.id)
        return (
          <div key={item?.id} className={`m-1 border-2 border-border rounded-full transition-all
            ${!isObtained ? 'grayscale opacity-30 pointer-events-none' : ''}`}>
              <Badge imageUrl={item?.attributes?.image?.data?.attributes?.url}/>
          </div>
        )
      })}
    </div>
  )
}