import qs from 'qs'

export interface StrapiParams {
  populate?: any
  fields?: any
  locale?: string
  status?: string
  sort?: any
  pagination?: any
}

export interface FeaturedBadgesData {
  data: {
    featuredBadges: number[]
  }
}

export default async function useApi(route: string, params?: any) {
  const query = qs.stringify(params)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}?${query}`)
  return await res.json()
}

export async function updateFeaturedBadges(userId: number, data: FeaturedBadgesData) {
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