import qs from 'qs'

export interface StrapiParams {
  populate?: any
  fields?: any
  locale?: string
  status?: string
  sort?: any
  pagination?: any
}

export default async function useApi(route: string, params?: any): Promise<any | null> {
  const query = qs.stringify(params) 
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}?${query}`)
  if(res.ok) {
    return res.json()
  } else {
    return null
  }
}