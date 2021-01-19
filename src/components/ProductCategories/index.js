import React from 'react'
import styles from './style.module.css'
import { AnchorLink } from "gatsby-plugin-anchor-links";

 
const ProductCategories = () => {
    return (
        <div className={styles.all}>
                <AnchorLink to="proizvodi#meso" className={[styles.container, styles.cat1].join(" ")}>
                    <span className={styles.category}>meso</span>
                </AnchorLink>
                <AnchorLink to="proizvodi#mlijeko" className={[styles.container, styles.cat2].join(" ")}>
                    <span className={styles.category}>mlijeko</span>
                </AnchorLink>
                <AnchorLink to="proizvodi#sirevi" className={[styles.container, styles.cat3].join(" ")}>
                    <span className={styles.category}>sirevi</span>
                </AnchorLink>
                <AnchorLink to="proizvodi#usluge" className={[styles.container, styles.cat4].join(" ")}>
                    <span className={styles.category}>usluge</span>
                </AnchorLink>
        </div>
    )
}
export default ProductCategories