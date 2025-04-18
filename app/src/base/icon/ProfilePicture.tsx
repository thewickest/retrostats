export default function ProfilePicture({ imageUrl }: { imageUrl: string }) {
  const src = imageUrl ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}` : undefined
  return (
    <>
      <img
        className={`h-16 w-16 sm:h-28 sm:w-28 rounded-full border-2 border-black bg-cover bg-center`}
        src={src} alt="" />
    </>
  )
}