import React from 'react';
import { category } from "../../constants/products";
import styles from './style.module.css'
import { Link} from 'gatsby'

 
const ProductCategories = () => {
    return (
        <div>
            {category.map(({ name, to }, index) => {
                return (
                    <Link key={index} to={to}>
                        <div>{name}</div>
                    </Link>)
            }
            )}
        </div>
    )
}
export default ProductCategories