import React from 'react'
import styles from './style.module.css'
import { news } from "../../constants/news";
import { Link } from 'gatsby'

const News = () =>  {
    return (
        <div>
            {news.map(({ src, to, tag, title, date, spoiler, text}, index) => {
                    return (
                        <Link key={index} to={to} state={{src, title, date, text}}>
                        <div className={styles.container}>
                        <img className={styles.src} src={src} alt="" title="news picture"/>
                            <div className={styles.content}>
                                <span className={styles.title}>{title}</span>
                                <span className={styles.date}>{date}</span>
                                <span className={styles.tag}>{tag}</span>
                                <p className={styles.spoiler}>{spoiler}</p>
                            </div>
                        </div>
                        </Link>
                        )
                    }
                )
            }
        </div>
    )
}

export default News