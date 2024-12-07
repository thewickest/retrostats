import ProfilePicture from "src/base/icon/ProfilePicture";
import Level from "./Level";
import FeaturedBadges from "./FeaturedBadges";

interface StrapiProfileInfo {
  username: string,
  level: number,
  hours: number
}

interface StrapiImage {
  id: number,
  attributes: {
    name: string,
    alternativeText: string,
    caption: string,
    width: number,
    height: number,
    formats: any, // modify this
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: string,
    provider: string,
    provider_metadata: string,
    createdAt: string, //TODO remove this
    updatedAt: string, //TODO remove this
  }
}

export interface StrapiBadge {
  id: number,
  attributes: {
    title: string,
    description: string,
    image: {
      data: StrapiImage
    }
  }
}

export default function ProfileInfo({
  profileInfo, image, badges, featuredBadges
}:{
  profileInfo?: StrapiProfileInfo,
  image?: StrapiImage,
  badges?: StrapiBadge[],
  featuredBadges?: StrapiBadge[]
}) {
  const imageUrl = image?.attributes?.url || ''
  const { username, hours, level } = profileInfo || {}
  return (
    <>
      <div className="space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-4 sm:p-5 font-base">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-auto">
            <div className="flex-none">
              <ProfilePicture imageUrl={imageUrl} />
            </div>
            <div className="flex flex-col flex-auto justify-center px-2">
              <div className="flex items-center text-2xl font-heading text-left">{username}<Level level={level} percentage={80}></Level></div>
              <div className="font-base text-left">{hours} hours played</div>
            </div>
          </div>
          <div className="flex flex-auto justify-end p-2">
            <FeaturedBadges badges={badges} featuredBadges={featuredBadges}/>
          </div>
        </div>
      </div>
    </>
  )
}