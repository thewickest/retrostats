export default function Title ({title}: {title: string}) {
  return (
    <h2 className="text-3xl font-bold text-center text-text dark:text-darkText mb-4">
      {title}
    </h2>
  )
}