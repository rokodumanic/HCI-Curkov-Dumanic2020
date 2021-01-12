import React, { useState} from "react"
import Helmet from "react-helmet"
import styles from './style.module.css'

import ContactBar from "../components/ContactBar"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"

import { Fade } from "@material-ui/core"

const IndexPage = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  if (typeof window !== `undefined`) {
    window.addEventListener('scroll', checkScrollTop);
  }
  return (
    <>
      <button className={styles.top} style={{display: showScroll ? 'block' : 'none'}} onClick={scrollTop}>^</button>
      <Helmet><title>OPG Tabar</title></Helmet>

      <ContactBar />
      <NavigationBar/>
      <Fade in={true}>
        <div style={{height: 1000, backgroundColor: "cyan"}}>
          <span>KONTAKT PODACI, MOZDA FORMA MOZDA NE, KARTA I SLICNO</span>
        </div>
      </Fade>
      <Footer />
    </>
  )
}

export default IndexPage

