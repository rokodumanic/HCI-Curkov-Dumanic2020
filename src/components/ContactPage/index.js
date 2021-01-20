import React from 'react'
import styles from './style.module.css'
import ContactForm from "../ContactForm"

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'


const API_URL = process.env.GATSBY_GOOGLE_URL
const API_KEY = process.env.GATSBY_GOOGLE_API
const API_QUERY = "Kaštel+Novi"

const IndexPage = () => {
    return (
    <div className={styles.container}>
      <div id="map"className={styles.fill}>
        <iframe className={styles.map} src= {API_URL.replace("$key", API_KEY).replace("$query", API_QUERY)} allowFullScreen title="Google Maps" />
      </div>
      <section className={styles.contacts}>
        <a href="tel:+385 00 000 0000" className={styles.inside}>
          <li>
            <FaPhoneAlt style={{color: '#6B8B3A', fontSize: "40px", marginBottom: 10}}/>
          </li>
          <li>
            <span className={styles.black}>Telefon: </span>
            <span className={styles.grey}> +385 00 000 0000</span>
          </li>
        </a>
        <a href="#map" className={styles.inside}>
          <li>
            <FaMapMarkerAlt style={{color: '#6B8B3A', fontSize: "40px", marginBottom: 10}}/>
          </li>
          <li>
          <span className={styles.black}>Adresa:</span>
            <li className={styles.grey}>Izmišljena ulica</li>
            <li className={styles.grey}>Izmišljen grad</li>
          </li>          
        </a>
        <a href="mailto:info@opgtabar.hr" className={styles.inside}>
          <li>
            <FaEnvelope style={{color: '#6B8B3A', fontSize: "40px", marginBottom: 10}}/>
          </li>
          <span className={styles.black}>Email: </span>
          <span className={styles.grey}> info@opgtabar.hr</span>
        </a>
      </section>
      <ContactForm />
    </div>
  )
}

export default IndexPage