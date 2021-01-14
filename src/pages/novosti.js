import React, { useState} from "react"
import StandardPage from "../components/templates/StandardPage"
import News from "../components/News"

const IndexPage = props => {
  return (
    <StandardPage props={props}>
      <News />
    </StandardPage>
  )
}

export default IndexPage

