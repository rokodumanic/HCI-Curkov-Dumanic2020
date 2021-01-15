import React from 'react'
import styles from './style.module.css'

const API_URL = process.env.GATSBY_GOOGLE_URL
const API_KEY = process.env.GATSBY_GOOGLE_API
const API_STYLE = process.env.GATSBY_GOOGLE_STYLE
const API_QUERY = "Kaštel+Novi"

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <iframe className={styles.map} src= {API_URL.replace("$key", API_KEY).replace("$query", API_QUERY)} allowFullScreen title="Google Maps">
        </iframe>
    </div>
  )
}

export default IndexPage