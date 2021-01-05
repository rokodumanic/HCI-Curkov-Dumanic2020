import React from 'react'
import styles from './style.module.css'

import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'
import logo from '../../images/logo-under.png'

const Footer = () => (
    <footer className={styles.footer}>

        <div className={styles.links}>
            <ul className={styles.navigation}>
                <h4 clssName={styles.istrazite}>ISTRAŽITE</h4>
                <li>
                    {navTabs.map(({tab, to}) => (
                        <Link to={to}>
                            <a>{tab}<br/></a>
                        </Link>)
                    )}
                </li>
            </ul>
        </div>
            <br></br>
        <div className={styles.contact}>
            <img src={logo} className={styles.logoUnder}/>
            
            <ul className={styles.address}><li>Izmisljena ulica</li>
                <li>Izmisljen grad</li>
                <li className={styles.phone}>
                    <a href="tel:+385 98 765 4321">+385 98 765 4321</a>
                </li>
                <li>
                    <a href="mailto:info@opgtabar.hr">info@opgtabar.hr</a>
                </li>
            </ul>
        </div>
        <div className={styles.newsletter}>
            <h4>NEWSLETTER</h4>
            <p>Unesite svoju adresu elektroničke pošte da ne bi propustili novosti.</p>
            <br></br>
            <input type="text" class="mailinput" placeholder="Vaša adresa" ></input>
            <br></br>
            <button>Pretplatite se</button>
        
        </div>
    </footer>
)
 
  export default Footer