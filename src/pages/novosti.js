import React from "react"
import StandardPage from "../components/templates/StandardPage"
import News from "../components/News"


// const News0 = React.lazy(() => import('../components/News'))

const IndexPage = props => {
  // const isSSR = typeof window === "undefined"
  return (
    <>
    {/* {!isSSR && ( */}
      <StandardPage props={props}>
        <React.Suspense fallback={<div>--- LOADING ---</div>}>
          <News />
        </React.Suspense>
      </StandardPage>
      {/* )} */}
    </>
  )
}

export default IndexPage

