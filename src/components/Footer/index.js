import React from 'react'
import styles from './style.module.css'

import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'

const Footer = () => (
    <footer className={styles.footer}>

        <div className={styles.footerLeft}>
            <ul className={styles.navigation}>
                <h4 clssName={styles.istrazite}>ISTRAŽITE</h4>
                <li>
                    {navTabs.map(({tab, to}) => (
                        <Link to={to}>
                            <span>{tab}<br/></span>
                        </Link>)
                    )}
                </li>
            </ul>
        </div>
            <br></br>
        <div className={styles.footerCenter}>
            <h3 className={styles.title}>OPG TABAR</h3>
            <ul className={styles.address}><li>Izmisljena ulica</li>
            <li>Izmisljen grad</li>
            <li className={styles.phone}>
                +385 98 765 4321
            </li>
            <li>info@opgtabar.hr</li>
            </ul>
        </div>
        <div className={styles.footerRight}>
            <h4>NEWSLETTER</h4>
            <a>Unesite svoju adresu elektroničke pošte da ne bi propustili novosti.</a>
            <br></br>
            <input type="text" class="mailinput" placeholder="Vaša adresa" ></input>
            <br></br>
            <button>Pretplatite se</button>
        
        </div>
    </footer>
)
 
  export default Footer