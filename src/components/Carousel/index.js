
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pic1 from '../../images/logo-under.png'
import pic2 from '../../images/gatsby-astronaut.png'
import pic3 from '../../images/logo-pic.png'
import React, { Component } from 'react';

export class demoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={pic1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={pic2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={pic3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
    
}

export default demoCarousel;



// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>