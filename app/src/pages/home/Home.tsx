import React, { useEffect, useState } from "react";
import Title from "../../base/title/Title";
import MarkdownBody from "../../base/markdownbody/MarkdownBody";

function Home() {
  const [ page, setPage ]: any = useState(null)
  useEffect(()=>{
    fetch('http://localhost:1337/api/home')
      .then(res => res.json())
      .then(data => setPage(data.data))
  }, [])
  return ( page &&
    <div>
      <Title title={page.attributes?.title}/>
      <MarkdownBody body={page.attributes?.body}/>
    </div>
    )
}

export default Home;
