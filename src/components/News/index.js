import React from 'react'
import styles from './style.module.css'
import { news } from "../../constants/news";

const News = () =>  {
    return (
        <div>
            {news.map(({ src, title, text}, index) => {
                    return (
                        <div>
                        <img src = {src} title="news picture"/>
                            <span >{title}</span>
                            <p>{text}</p>
                        </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default News