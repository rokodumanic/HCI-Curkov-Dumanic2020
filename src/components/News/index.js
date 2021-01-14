import React from 'react'
import styles from './style.module.css'
import { news } from "../../constants/news";

const News = () =>  {
    return (
        <div>
            {news.map(({ src, title, date, spoiler}, index) => {
                    return (
                        <div className={styles.container}>
                        <img className={styles.src} src={src} title="news picture"/>
                            <div className={styles.content}>
                                <span className={styles.title}>{title}</span>
                                <span className={styles.date}>{date}</span>
                                <p className={styles.spoiler}>{spoiler}</p>
                            </div>
                        </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default News