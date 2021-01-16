import React from "react"
import StandardPage from "../components/templates/StandardPage"
import AboutUs from "../components/AboutUs"


const IndexPage = props => {
  return (
    <StandardPage props={props}>
        <AboutUs />
    </StandardPage>
  )
}

export default IndexPage

