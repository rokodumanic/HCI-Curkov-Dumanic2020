import React from "react"
import StandardPage from "../../components/templates/StandardPage"

import style from "./style.module.css"



const IndexPage = (props) => {
  return (
    <StandardPage props={props}>
    <div className={style.container}>
         <p>THIS IS ABOUT US</p>
         <p>THIS IS ABOUT US</p>
         <p>THIS IS ABOUT US</p>
         <p>THIS IS ABOUT US</p>
         <p>THIS IS ABOUT US</p>
    </div>

    </StandardPage>
  )
}

export default IndexPage