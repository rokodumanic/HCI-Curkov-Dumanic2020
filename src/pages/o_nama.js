import React, { useState} from "react"
import Helmet from "react-helmet"
import styles from './style.module.css'

import ContactBar from "../components/ContactBar"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"

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

  window.addEventListener('scroll', checkScrollTop)

  return (
    <>
      <button className={styles.top} style={{display: showScroll ? 'block' : 'none'}} onClick={scrollTop}>^</button>
      <Helmet><title>OPG Tabar</title></Helmet>

      <ContactBar />
      <NavigationBar/>
      <div style={{height: 1000, backgroundColor: "cyan"}}>
        <span>OVDJE IDE NEKI TEXT DA LJUDI NAS ZAVOLE</span>
      </div>
      <Footer />
    </>
  )
}

export default IndexPage

