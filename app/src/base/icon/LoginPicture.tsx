export default function LoginPicture({ imageUrl }: { imageUrl: string }) {
  const src = imageUrl ? `${imageUrl}` : ''
  return (
    <>
      <img
        className={`h-8 w-8 md:h-12 md:w-12 rounded-full border-2 border-black bg-cover bg-center`}
        src={src} alt="" />
    </>
  )
}