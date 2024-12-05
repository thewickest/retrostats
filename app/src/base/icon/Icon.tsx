export default function Icon({ imageUrl }: { imageUrl: string }) {
  const src = imageUrl ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}` : ''
  return (
    <>
      <img
        className={`h-8 w-8 md:h-12 md:w-12 rounded-full border-2 border-black bg-cover bg-center`}
        src={src} alt="" />
    </>
  )
}