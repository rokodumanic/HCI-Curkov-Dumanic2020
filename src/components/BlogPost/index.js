import React from "react"
import StandardPage from "../../components/templates/StandardPage"
import {news} from "../../constants/news"

import styles from "./style.module.css"



const IndexPage = (props) => {
  let item= news;
  if (typeof window !== `undefined`) {
    item = news.find(i=>i.to === window.location.pathname);
  }
  
  return (
    <StandardPage props={props}>
    <div className={styles.body}>
        <img className={styles.image} src={item.src} alt="" title="news picture"/>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.date}>{item.date}</span>
        </div>
        <form type="submit" action="../../novosti" name="q"><button type="submit" className={styles.tag}>{item.tag}</button></form>
        <p className={styles.text}>{item.text}</p> 
    </div>
    </StandardPage>
  )
}

export default IndexPage