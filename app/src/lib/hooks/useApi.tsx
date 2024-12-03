import qs from 'qs'

export interface StrapiParams {
  populate?: any
  fields?: any
  locale?: string
  status?: string
  sort?: any
  pagination?: any
}

export default async function useApi(route: string, params?: StrapiParams) {
  const query = qs.stringify(params)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}?${query}`)
  return await res.json()
}