import React from 'react'

import styles from './style.module.css'

const NavigationBar = () => (
    <div className={styles.container}>
       <div className={styles.logo}>
       </div>
       <div className={styles.navs}>
           <span>NASLOVNICA</span>
           <span>PROIZVODI</span>
           <span>NOVOSTI</span>
           <span>GALERIJA</span>
           <span>O NAMA</span>
           <span>KONTAKT</span>
        </div>
    </div>
  )
  
  export default NavigationBar