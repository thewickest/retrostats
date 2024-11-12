export default function ProfilePicture({ imageUrl }: { imageUrl: string }) {
  const src = imageUrl ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}` : ''
  return (
    <>
      <img
        className={`h-8 w-8 sm:h-28 sm:w-28 rounded-full border-2 border-black bg-cover bg-center`}
        src={imageUrl} alt="" />
    </>
  )
}