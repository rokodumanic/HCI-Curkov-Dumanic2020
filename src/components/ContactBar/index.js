import React from 'react'

import { SocialIcon } from 'react-social-icons'
import styles from './style.module.css'

const ContactBar = () => (
    <div className={styles.container}>
       <div className={styles.left}>
           <span className={styles.white}>KONTAKTIRAJTE NAS NA </span>
           <span className={styles.grey}>
            <a href="tel:+385 98 765 4321">+385 98 765 4321</a>
            <a href="mailto:info@opgtabar.hr">info@opgtabar.hr</a>
           </span>
       </div>
       <div className={styles.right}>
           <SocialIcon url="facebook.com" className={styles.icons} style={{ height: 25, width: 25 }}/>
           <SocialIcon url="twitter.com" className={styles.icons} style={{ height: 25, width: 25 }}/>
           <SocialIcon url="instagram.com" className={styles.icons} style={{ height: 25, width: 25 }}/>
           <SocialIcon url="youtube.com" className={styles.icons} style={{ height: 25, width: 25 }}/>
        </div>
    </div>
  )
  
  export default ContactBar