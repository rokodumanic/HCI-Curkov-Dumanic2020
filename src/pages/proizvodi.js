import React from "react"
import StandardPage from "../components/templates/StandardPage"
import Products from "../components/Products"

const IndexPage = props => {
  return (
    <StandardPage props={props}>
        <Products />
    </StandardPage>
  )
}

export default IndexPage

