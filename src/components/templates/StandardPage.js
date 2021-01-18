import React, { useState} from "react"
import Helmet from "react-helmet"
import styles from './style.module.css'
import { FaAngleUp } from 'react-icons/fa'

import ContactBar from "../ContactBar"
import NavigationBar from "../NavigationBar"
import Footer from "../Footer"
import Panorama from "../../components/Panorama"

import { Fade } from "@material-ui/core"

const StandardPage = (props) => {
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
      <button className={styles.top} style={{display: showScroll ? 'block' : 'none'}} onClick={scrollTop}>
        <FaAngleUp></FaAngleUp>
      </button>
      <Helmet><title>OPG Tabar</title></Helmet>

      <ContactBar />
      <NavigationBar path={props.props.path}/>
      <Panorama />
      <Fade in={true}>
        {
            props.children
        }
      </Fade>
      <Footer />
    </>
  )
}

export default StandardPage
