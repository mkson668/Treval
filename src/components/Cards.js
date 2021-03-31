import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Check these destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={img1}
                            text="Explore the bla bla bla"
                            label="Adventure"
                            path="/service" />

                        <CardItem src={img3}
                            text="Discover the depths of bla bla bla"
                            label="Relaxation"
                            path="/service" />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={img1}
                            text="Explore the bla bla bla"
                            label="Adventure"
                            path="/service" />

                        <CardItem src={img3}
                            text="Discover the depths of bla bla bla"
                            label="Relaxation"
                            path="/service" />

                        <CardItem src={img3}
                            text="Discover the depths of bla bla bla"
                            label="Relaxation"
                            path="/service" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
