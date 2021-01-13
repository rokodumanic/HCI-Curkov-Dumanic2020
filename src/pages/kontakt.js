import React from "react"
import StandardPage from "../components/templates/StandardPage"
import ContactPage from "../components/ContactPage"

const IndexPage = props => {
  return (
    <StandardPage props={props}>
      <ContactPage />
    </StandardPage>
  )
}

export default IndexPage

