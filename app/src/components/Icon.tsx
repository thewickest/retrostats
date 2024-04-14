export default function Icon({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="col-span-3 flex justify-center items-center">
      <img 
        className="h-16 w-16 rounded-full border-2 border-black bg-cover bg-center"
        src={`http://localhost:1337${imageUrl}`} alt="" />
    </div>
  )
}