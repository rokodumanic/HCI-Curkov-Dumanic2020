import React from "react"
import StandardPage from "../components/templates/StandardPage"
import SearchPage from "../components/SearchPage"

const IndexPage = props => {
  return (
    <StandardPage props={props}>
        <SearchPage />
    </StandardPage>
  )
}

export default IndexPage

