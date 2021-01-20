import React from "react"
import MainPage from "../components/templates/MainPage"

import DemoCarousel from "../components/Carousel"
import ProductCategories from "../components/ProductCategories"
import AboutUs from "../components/AboutUs"
import ContactForm from "../components/ContactForm"


const IndexPage = props => {
  return (
    <MainPage props={props}>
      <div>
        <DemoCarousel />
        <ProductCategories />
        
        <AboutUs>
          <p style={{textTransform: "uppercase", fontWeight: "750", paddingLeft: "1em"}}>
             Dobrodošli na <span style={{color: "#6b8b3a"}}>OPG</span> Tabar
          </p>
        </AboutUs>
        <ContactForm>
          <p style={{textTransform: "uppercase", fontWeight: "750", paddingLeft: "4em"}}>
            <span style={{color: "#6b8b3a"}}>Imate pitanje? </span> Pošaljite nam upit
          </p>
        </ContactForm>
      </div>
    </MainPage>
  )
}

export default IndexPage
