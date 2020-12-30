import React from "react"
import Helmet from "react-helmet"

import ContactBar from "../components/ContactBar"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"

const IndexPage = () => (
  <>
    <Helmet><title>OPG Tabar</title></Helmet>

    <ContactBar />
    <NavigationBar/>
    <div style={{height: 1000}}>

    </div>
    <Footer />
  </>
)

export default IndexPage
