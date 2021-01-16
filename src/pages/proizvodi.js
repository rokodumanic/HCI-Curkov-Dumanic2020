import React from "react"
import StandardPage from "../components/templates/StandardPage"

const IndexPage = props => {
  return (
    <StandardPage props={props}>
      <div style={{ height: 1000, backgroundColor: "cyan", maxWidth: 1300, margin: "0 auto" }}>
        <span>OVO SU PROIZVODI</span>
      </div>
    </StandardPage>
  )
}

export default IndexPage

