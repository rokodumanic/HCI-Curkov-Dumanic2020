import React, { useState } from "react"
import Gallery from "../components/GalleryFill"
import MainPage from "../components/templates/MainPage"


const IndexPage = props => {
  return (
    <MainPage props={props}>
      <Gallery />
    </MainPage>
  )
}

export default IndexPage

