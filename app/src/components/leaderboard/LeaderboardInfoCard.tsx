import Icon from "../../base/icon/Icon";

export default function LeaderboardInfoCard({info}: any) {
  const { game, score, game_user } = info.attributes;
  const { name, image } = game.data?.attributes ? game.data.attributes : { name: 'noname', image: null}
  const { username } = game_user.data?.attributes ? game_user.data.attributes : { username: 'default' }
  const { url } = image?.data?.attributes ? image.data.attributes : ''
  return (
    <div className="flex max-md:flex-wrap text-center p-2
      bg-main border-2 border-black rounded-base
      shadow-dark transition-all duration-300 hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      <div className="flex flex-auto w-1/3 max-md:border-b-2 max-md:border-black max-md:w-full max-md:pb-1">
        <div className="flex-none">
          <Icon imageUrl={url}/>
        </div>
        <div className="flex-auto place-content-center md:border-r-2 md:border-black text-text items-center font-heading">
          <p>{name}</p>
        </div>
      </div>
      <div className="flex flex-auto w-2/3 max-md:w-full justify-around md:justify-between max-md:pt-1 md:p-2 text-text space-x-2 p-2">
        <div className="place-content-center">
          <p>{username}</p>
        </div>
        <div className="place-content-center">
          <p>{score}</p>
        </div>
      </div>
    </div>
  )
}