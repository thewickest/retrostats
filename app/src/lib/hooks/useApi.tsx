export default async function useApi(route: string, pagination?: any) {
  const { page, pageSize } = pagination || {};
  const paginationString = (page && pageSize) ? `?pagination[page]=${page}&pagination[pageSize]=${pageSize}` : '';

  // useEffect(()=>{
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}${paginationString}`)
  //     .then(res => res.json())
  //     .then(data =>  setItems(data))
  //     .catch( e => setItems([]))
  // }, [route, paginationString])

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}${paginationString}`)
  const items = await res.json()

  return [items]
}