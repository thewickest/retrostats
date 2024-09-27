import { useEffect, useState } from "react";

export default function useApi(route: string, pagination?: any) {
  const [ items, setItems ]: any = useState([]);
  const { page, pageSize } = pagination || {};
  const paginationString = (page && pageSize) ? `?pagination[page]=${page}&pagination[pageSize]=${pageSize}` : '';

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}${route}${paginationString}`)
      .then(res => res.json())
      .then(data =>  setItems(data))
      .catch( e => setItems([]))
  }, [route, paginationString])

  return [items, setItems]
}