import React from "react"
import Helmet from "react-helmet"

import ContactBar from "../components/ContactBar"
import Footer from "../components/Footer"

const IndexPage = () => (
  <>
    <Helmet><title>OPG Tabar</title></Helmet>

    <ContactBar />
    <Footer />
  </>
)

export default IndexPage
