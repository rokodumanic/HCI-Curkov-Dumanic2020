import React from "react"
import StandardPage from "../components/templates/StandardPage"

const IndexPage = props => {
  return (
    <StandardPage props={props}>
      <div style={{ height: 1000, backgroundColor: "cyan" }}>
        <span>OVO SU PROIZVODI</span>
      </div>
    </StandardPage>
  )
}

export default IndexPage

