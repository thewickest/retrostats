'use client'
import { LuImagePlus } from "react-icons/lu"

export default function ProfilePicture({ imageUrl }: { imageUrl: string }) {
  const src = imageUrl ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}` : undefined
  return (
    <>
      {src && <img
        className={`h-16 w-16 sm:h-28 sm:w-28 rounded-full border-2 border-black bg-cover bg-center`}
        src={src} alt="" />
      }
      {!src && (
        //TODO implement adding an image into profile
        <button onClick={()=> {}}className="flex h-16 w-16 sm:h-28 sm:w-28 rounded-full border-2 border-black bg-cover bg-center items-center">
          <div className="flex items-center mx-auto">
            <LuImagePlus className="h-6 w-6"></LuImagePlus>
          </div>
        </button>
      )}
    </>
  )
}