export default async function useApi(route: string, pagination?: any) {
  const { page, pageSize } = pagination || {};
  const paginationString = (page && pageSize) ? `?pagination[page]=${page}&pagination[pageSize]=${pageSize}` : '';

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}${paginationString}`)
  return await res.json()
}