import { useEffect, useState } from "react";

export default function useApi(route: string) {
  const [ items, setItems ]: any = useState([]);

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}${route}`)
      .then(res => res.json())
      .then(data =>  setItems(data))
      .catch( e => setItems([]))
  }, [route])

  return [items, setItems]
}