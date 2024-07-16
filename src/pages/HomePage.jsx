import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../assets/images/slide1.jpg'
import slide2 from '../assets/images/slide2.jpg'
import slide3 from '../assets/images/slide3.jpg'
import menu1 from '../assets/images/menu-01.jpg'
import menu2 from '../assets/images/menu-02.jpg'
import menu3 from '../assets/images/menu-03.jpg'
import menu4 from '../assets/images/menu-04.jpg'
import menu5 from '../assets/images/menu-05.jpg'
import menu6 from '../assets/images/menu-06.jpg'
import "../css/HomePage.css"

function HomePage() {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img src={slide1} alt="slide1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} alt="slide2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide3} alt="slide3" />
                </Carousel.Item>
            </Carousel>

            <div className="menu-item">
                <img src={menu1}></img>
                <img src={menu2}></img>
                <img src={menu3}></img>
                <img src={menu4}></img>
                <img src={menu5}></img>
                <img src={menu6}></img>
            </div>

            <h1 className="home-heading">This is Home Page</h1>
        </>
    );
}

export default HomePage;
