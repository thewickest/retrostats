export default function Badge({ imageUrl }: { imageUrl: string | undefined }) {
  const src = imageUrl ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}` : undefined
  return (
    <>
      <img
        className={`h-8 w-8 md:h-10 md:w-10 rounded-full bg-cover bg-center`}
        src={src} alt="" />
    </>
  )
}