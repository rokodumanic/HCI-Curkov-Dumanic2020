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
        search = news.filter(titles => titles.tag.toLocaleLowerCase().includes(item.toLocaleLowerCase())).map(({ src, to, title, date, spoiler, text, tag}, index) => {
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
        );
    }
    else {
        search = news.filter(titles => titles.title.toLocaleLowerCase().includes(item.toLocaleLowerCase())).map(({ src, to, title, date, spoiler, text, tag}, index) => {
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
        );
    }
    return (
        <div>
            <p style={{marginLeft: "3em"}}>Sve novosti sa traženom riječi: <i style={{color: "#6b8b3a"}}>{item}</i></p>
            {search}
        </div>
    )
}

export default News