import React from "react"
import MainPage from "../components/templates/MainPage"

import DemoCarousel from "../components/Carousel"

const IndexPage = props => {
  return (
    <MainPage props={props}>
      <DemoCarousel />
    </MainPage>
  )
}

export default IndexPage
