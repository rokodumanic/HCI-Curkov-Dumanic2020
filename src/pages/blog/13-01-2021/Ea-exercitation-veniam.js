import React from "react"
import StandardPage from "../../../components/templates/StandardPage"
import {news} from "../../../constants/news"

import styles from "../styles.module.css"


const IndexPage = props => {
  const item = news.find(i=>i.to === props.location.pathname);
  return (
    <StandardPage props={props}>
    <div>
        <img  src={item.src} title="news picture"/>
        <span >{item.title}</span>
        <span >{item.date}</span>
        <p >{item.text}</p>
    </div>

    </StandardPage>
  )
}

export default IndexPage
