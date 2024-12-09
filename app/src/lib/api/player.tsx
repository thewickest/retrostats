export interface FeaturedBadgesData {
  data: {
    featuredBadges: number[]
  }
}

export async function updatePlayerFeaturedBadges(userId: number, data: FeaturedBadgesData) {
  //TODO change this when created the API endpoint
  const res = await fetch(
    `http://localhost:1337/api/game-users/${userId}`, 
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  )
  return await res.json()
}