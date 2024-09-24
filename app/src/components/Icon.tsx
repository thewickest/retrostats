export default function Icon({ imageUrl, size }: { imageUrl: string, size?: string  }) {
  const src = imageUrl ? `${process.env.REACT_APP_IMAGE_DOMAIN}${imageUrl}` : ''
  return (
    <>
      <img
        className={`h-12 w-12 rounded-full border-2 border-black bg-cover bg-center`}
        src={src} alt="" />
    </>
  )
}