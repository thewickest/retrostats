export default function Icon({ imageUrl }: { imageUrl: string }) {
  const src = imageUrl ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}` : ''
  return (
    <>
      <img
        className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-black bg-cover bg-center`}
        src={undefined} alt="" />
    </>
  )
}