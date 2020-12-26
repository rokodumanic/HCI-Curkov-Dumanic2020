import React from 'react'

import { SocialIcon } from 'react-social-icons'
import styles from './style.module.css'

const ContactBar = () => (
    <div className={styles.container}>
       <div className={styles.left}>
           <span className={styles.white}>Kontaktirajte nas na</span>
           <span className={styles.grey}>
            <a href="#">+385 98 765 4321</a>
            <a href="mailto:info@opgtabar.hr">info@opgtabar.hr</a>
           </span>
       </div>
       <div className={styles.right}>
           <SocialIcon url="facebook.com"/>
           <SocialIcon url="twitter.com"/>
           <SocialIcon url="instagram.com"/>
           <SocialIcon url="youtube.com"/>
        </div>
    </div>
  )
  
  export default ContactBar