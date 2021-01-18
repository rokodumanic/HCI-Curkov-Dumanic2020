import React from 'react'
import styles from './style.module.css'
import { meso, mlijeko, sirevi, usluge } from "../../constants/products";
 
const Product = () => {
    return (
        <div className={styles.container}>
            <span className={styles.category}>Meso</span>
            {meso.map(({ name, price }, index) => {
                return(
                    <div>
                        <div className={styles.pricing}>
                            <ul className={styles.name}>{name}</ul>
                            <div className={styles.dots}></div>
                            <ul className={styles.price}>{price}</ul>
                        </div>
                    </div>
                    )
                }
            )}
        </div>
    )
}
export default Product