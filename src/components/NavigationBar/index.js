import React, { useState } from 'react'
import { navs as navTabs } from '../../constants/const'
import { Link} from 'gatsby'
import { FaSearch } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

import Toggle from './rightNav'

import styles from './style.module.css'
import logo from '../../images/logo-side.png'

const NavigationBar = (props) =>  {
    const [rightNav, setRightNav] = useState(false);
    let toggle;
    let button;

    const toggleRightNav = () => rightNav === false ? setRightNav(true) : setRightNav(false);
    if(rightNav) {
        toggle = <Toggle style={styles.toggle}/>
        button = <IoClose style={{ marginBottom: '-5px', height: '50px', width: '50px'}} />
    }
    else {
        button = <FiMenu style={{ marginBottom: '-5px', height: '50px', width: '50px'}} />
    }

    return (
        <>
        <div className={styles.sticky}>
        <header className={styles.container}>
            <div className={styles.left}>
            <Link to="/"><img src={logo} className={styles.logoSide} alt="OPG Tabar"/></Link>
            </div>
            <div className={styles.right}>
                {navTabs.map(({ tab, to }, index) => {
                    return (
                        <Link key={index} to={to}>
                            <span className={to === props.path ? styles.selected : ""}>{tab}</span>
                        </Link>)
                }
                )}
                <FaSearch className={styles.search} style={{ marginBottom: '-2px', display: "none" }} />
            </div>
            <button className={styles.hamburger} onClick={toggleRightNav}>
                {button}
            </button>
            
        </header>
        {toggle}
        </div>
        </>
    )
}

export default NavigationBar
