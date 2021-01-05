import React, { useState } from 'react'
import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'
import { FaSearch } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

import Toggle from './rightNav'

import styles from './style.module.css'
import logo from '../../images/logo-side.png'

const NavigationBar = () =>  {
    const [rightNav, setRightNav] = useState(false);
    let toggle;

    const toggleRightNav = () => rightNav === false ? setRightNav(true) : setRightNav(false);
    if(rightNav) {
        toggle = <Toggle style={styles.toggle}/>
    }

    return (
        <>
        <header className={styles.container}>
            <div className={styles.left}>
            <img src={logo} className={styles.logoSide}/>
            </div>
            <div className={styles.right}>
                {navTabs.map(({ tab, to }) => (
                    <Link to={to}>
                        <span>{tab}</span>
                    </Link>)
                )}
                <FaSearch className={styles.search} style={{ marginBottom: '-2px' }} />
            </div>
            <button className={styles.hamburger} onClick={toggleRightNav}>
                <FaBars style={{ marginBottom: '-5px', height: '60px', width: '60px' }} />
            </button>  
        </header>
        {toggle}
        </>
    )
}

export default NavigationBar
