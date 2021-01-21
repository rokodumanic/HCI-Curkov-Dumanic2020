import React from 'react'
import styles from './style.module.css'
import { news } from "../../constants/news";
import { Link } from 'gatsby'

const News = () =>  {
    let item = "";
    if (typeof window !== `undefined`) {
        let params = (new URL(document.location)).searchParams;
        item = params.get('q');
        console.log(item);
    }
    return (
        <div>
            {news.filter(titles => titles.title.includes(item)).map(({ src, to, title, date, spoiler, text}, index) => {
                    return (
                        <Link key={index} to={to} state={{src, title, date, text}}>
                        <div className={styles.container}>
                        <img className={styles.src} src={src} alt="" title="news picture"/>
                            <div className={styles.content}>
                                <span className={styles.title}>{title}</span>
                                <span className={styles.date}>{date}</span>
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