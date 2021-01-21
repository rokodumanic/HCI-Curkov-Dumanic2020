import React from "react"
import StandardPage from "../components/templates/StandardPage"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = (props) => (
  <StandardPage props={props}>
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Stranica nije pronađena</h1>
      <p>Izgledaš izgubljeno... Bolje se vrati gdje ima nešto za gledati.</p>
    </Layout>
  </StandardPage>
)

export default NotFoundPage
