import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {news} from "../../constants/news"
import { Link } from 'gatsby'
import styles from './style.module.css'


class DemoCarousel extends Component {
    render() {
        return(
            <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight interval={3000} transitionTime={300}>
                {news.slice(0,5).map(({ src, to, title, spoiler}, index) => {
                    return (
                        <Link key={index} to={to} state={{src, title}}>
                            <div className={styles.carousel}>
                                    <img className={styles.src} src={src} alt="" title="news picture"/>
                                        <div className={styles.text}>
                                            <span className={styles.title}>{title}</span>
                                            <p className={styles.spoiler}>{spoiler}</p>
                                        </div>
                            </div>
                        </Link>
                        )
                    }
                )
            }
            </Carousel>
            );
    }
};



export default DemoCarousel

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>