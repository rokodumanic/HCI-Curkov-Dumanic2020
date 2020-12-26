import React from 'react'

import styles from './style.module.css'

const NavigationBar = () => (
    <div className={styles.container}>
       <div className={styles.left}>
           <span className={styles.white}>Kontaktirajte nas na </span>
           <span className={styles.grey}>
            <a href="#">+385 98 765 4321</a>
            <a href="mailto:info@opgtabar.hr">info@opgtabar.hr</a>
           </span>
       </div>
       <div className={styles.right}>
           <SocialIcon url="facebook.com" style={{ height: 30, width: 30 }}/>
           <SocialIcon url="twitter.com" style={{ height: 30, width: 30 }}/>
           <SocialIcon url="instagram.com" style={{ height: 30, width: 30 }}/>
           <SocialIcon url="youtube.com" style={{ height: 30, width: 30 }}/>
        </div>
    </div>
  )
  
  export default NavigationBar