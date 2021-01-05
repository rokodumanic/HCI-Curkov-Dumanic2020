import React from 'react'
import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'
import { FaSearch } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

import styles from './style.module.css'
import logo from '../../images/logo-side.png'

const NavigationBar = () => (
    <header className={styles.container}>
        <a className={styles.left} href="#">
            <img src={logo} className={styles.logoSide}/>
        </a>
        <div className={styles.right}>
            {navTabs.map(({ tab, to }) => (
                <Link to={to}>
                    <span>{tab}</span>
                </Link>)
            )}
            <FaSearch className={styles.search} style={{ marginBottom: '-2px' }} />
        </div>
        <button className={styles.hamburger}>
            <FaBars style={{ marginBottom: '-5px', height: '1.5em', width: '1.5em' }} />
        </button>
    </header>
)

export default NavigationBar
