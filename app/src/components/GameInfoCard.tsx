function toLocaleDate(date: string) {
  const nd = new Date(date);
  return nd.toLocaleDateString('es-ES');
}

export default function GameInfoCard({info}: any) {
  return (
    <div className="w-[250px] rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="border-b-2 border-black p-1">
        <h2 className="text-lg">{info.game.name}</h2>
      </div>
      <div className="p-4">
        <p>Fecha: {toLocaleDate(info.initDate)}</p>
        <p>Puntuación: {info.score}</p>
        <p>Duración: {info.duration}</p>
      </div>
    </div>
  )
}