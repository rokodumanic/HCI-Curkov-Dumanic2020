import React from 'react';
import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'

import styles from './style.module.css'


const RightNav = () => {
  return (
    <ul className={styles.links}>
        {navTabs.map(({ tab, to }) => (
            <li>
                <Link to={to}>
                    <span>> {tab}</span>
                </Link>
            </li>)
        )}
      </ul>
  )
}

export default RightNav