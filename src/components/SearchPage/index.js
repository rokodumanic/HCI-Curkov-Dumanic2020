import React from 'react'
import styles from './style.module.css'
import { news } from "../../constants/news";
import { Link } from 'gatsby'

const News = () =>  {
    let search;
    let item = "";
    if (typeof window !== `undefined`) {
        let params = (new URL(document.location)).searchParams;
        item = params.get('q');
    }

    if(item.includes("#")){
        search = news.filter(titles => titles.tag.toLocaleLowerCase().includes(item.toLocaleLowerCase())).map(({ src, to, title, date, spoiler, text}, index) => {
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
        );
    }
    else {
        search = news.filter(titles => titles.title.toLocaleLowerCase().includes(item.toLocaleLowerCase())).map(({ src, to, title, date, spoiler, text}, index) => {
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
        );
    }
    return (
        <div>
            {search}
        </div>
    )
}

export default News