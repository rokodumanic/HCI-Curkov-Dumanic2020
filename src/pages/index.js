import React from "react"
import MainPage from "../components/templates/MainPage"

import DemoCarousel from "../components/Carousel"
import ProductCategories from "../components/ProductCategories"

const IndexPage = props => {
  return (
    <MainPage props={props}>
      <div>
        <DemoCarousel />
        <ProductCategories />
      </div>
    </MainPage>
  )
}

export default IndexPage
