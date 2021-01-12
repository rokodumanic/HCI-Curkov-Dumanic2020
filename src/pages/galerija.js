import React, { useState } from "react"
import Gallery from "../components/GalleryFill"
import StandardPage from "../components/templates/StandardPage"


const IndexPage = props => {
  return (
    <StandardPage props={props}>
      <Gallery />
    </StandardPage>
  )
}

export default IndexPage

