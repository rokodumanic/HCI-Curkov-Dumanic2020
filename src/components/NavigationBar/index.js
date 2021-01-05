import React from 'react'
import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'
import { FaSearch } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

import styles from './style.module.css'

const NavigationBar = () => (
    <header className={styles.container}>
        <div className={styles.left}>
            <span>OPG TABAR</span>
        </div>
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
