import React from 'react'
import styles from './style.module.css'
import { meso, mlijeko, sirevi, usluge } from "../../constants/products";
 
const Product = () => {
    return (
        <>
        <div className={[styles.container, styles.cat1].join(" ")}>
            <span className={styles.category}>meso</span>
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
        <div className={[styles.container, styles.cat2].join(" ")}>
            <span className={styles.category}>mlijeko</span>
            {mlijeko.map(({ name, price }, index) => {
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
        <div className={[styles.container, styles.cat3].join(" ")}>
            <span className={styles.category}>sirevi</span>
            {sirevi.map(({ name, price }, index) => {
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
        <div className={[styles.container, styles.cat4].join(" ")}>
            <span className={styles.category}>usluge</span>
            {usluge.map(({ name, price }, index) => {
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
        </>
    )
}
export default Product