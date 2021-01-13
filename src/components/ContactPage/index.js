import React, { useState } from 'react'
import styles from './style.module.css'

const IndexPage = () => {
  return (
    <div>
      <iframe className={styles.map} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyADGAutWLrWQWAOjOfpCHa2Up20BLNMvO8
          &q=Kaštel+Novi" allowfullscreen>
        </iframe>
    </div>
  )
}

export default IndexPage