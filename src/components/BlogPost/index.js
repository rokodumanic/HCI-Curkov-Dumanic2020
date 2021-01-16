import React from "react"
import StandardPage from "../../components/templates/StandardPage"
import {news} from "../../constants/news"

import style from "./style.module.css"



const IndexPage = (props) => {
  const item = news.find(i=>i.to === window.location.pathname);
  return (
    <StandardPage props={props}>
    <div className={style.body}>
         <img className={style.image} src={item.src} alt="" title="news picture"/>
        <div className={style.titleContainer}>
          <span className={style.title}>{item.title}</span>
          <span className={style.date}>{item.date}</span>
        </div>
        <p className={style.text}>{item.text}</p> 
    </div>

    </StandardPage>
  )
}

export default IndexPage