import React from 'react'
import styles from './style.module.css'
import { meso, mlijeko, sirevi, usluge } from "../../constants/products";
 
const Product = () => {
    return (
        <div>
            {meso.map(({ category }, index) => {
                return (
                    <div className={styles.container}>
                        <span>{category}</span>
                        {meso.map(({ name, price }, index) => {
                            return(
                                <div>
                                    <div className={styles.pricing}>
                                        <span className={styles.name}>{name}</span>
                                        <span className={styles.price}>{price}</span>
                                    </div>
                                </div>
                                )
                            }
                        )}
                    </div>
                    )
                }
            )
            }
        </div>
    )
}

export default Product