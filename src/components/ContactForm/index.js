import React from 'react'
import styles from './style.module.css'

import { FaEnvelope, FaComment, FaFlag, FaUser } from 'react-icons/fa'


const IndexPage = (props) => {
    return (
        <div className={styles.mainContainer}>
            {props.children}
            <form className={styles.form}>
                    
                    <FaUser className={[styles.icons, styles.i1].join(" ")}/>
                    <input type="text" className={[styles.input, styles.i1].join(" ")} placeholder="Ime i prezime" ></input>
                
                
                    <FaEnvelope className={[styles.icons, styles.i2].join(" ")}/>
                    <input type="email" className={[styles.input, styles.i2].join(" ")} placeholder="Email adresa" ></input>
                
                
                    <FaFlag className={[styles.icons, styles.i3].join(" ")}/>
                    <input type="text" className={[styles.input, styles.i3].join(" ")} placeholder="Naslov" ></input>
                
                
                    <FaComment className={[styles.icons, styles.i4].join(" ")}/>
                    <textarea type="text" className={[styles.input, styles.i4].join(" ")} placeholder="Molimo upišite Vaš upit ovdje..." ></textarea>

                    <button className={styles.submit}>Pošalji</button>
            </form>
        </div>
    )
}

export default IndexPage