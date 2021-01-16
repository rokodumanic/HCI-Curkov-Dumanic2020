import React from 'react'
import styles from './style.module.css'

import { BsPhone } from "react-icons/bs"

const API_URL = process.env.GATSBY_GOOGLE_URL
// const API_KEY = process.env.GATSBY_GOOGLE_API
const API_KEY = "apikey"
const API_QUERY = "Kaštel+Novi"

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.fill}>
        <iframe className={styles.map} src= {API_URL.replace("$key", API_KEY).replace("$query", API_QUERY)} allowFullScreen title="Google Maps" />
      </div>
      <section className={styles.contacts}>
        <ul className={styles.inside}>
          <li>
            <BsPhone style={{color: '#6B8B3A'}}/>
          </li>
          <li>
            <span className={styles.black}>Telefon:</span>
            <a href="tel:+385 00 000 0000" className={styles.grey}>+385 00 000 0000</a>
          </li>
        </ul>
        <ul className={styles.inside}>
          <li>
            <BsPhone style={{color: '#6B8B3A'}}/>
          </li>
          <li className={styles.grey}>
            <li>Izmišljena ulica</li>
            <li>Izmišljen grad</li>
          </li>          
        </ul>
        <ul className={styles.inside}>
          <li>
            <BsPhone style={{color: '#6B8B3A'}}/>
          </li>
          <li>
            <a href="mailto:info@opgtabar.hr" className={styles.grey}>info@opgtabar.hr</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default IndexPage