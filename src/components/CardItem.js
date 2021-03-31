import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <React.Fragment>
            <li className="cards__item" >
                <Link className="cards__item__link" to={props.path}>
                    {/* data-category enables the blue tags on the figures */}
                    <figure className="cards__item__pic-wrap"
                        data-category={props.label}>
                        <img src={props.src}
                            alt="Travel Image"
                            className="cards__item__img">
                        </img>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </React.Fragment>
    )
}

export default CardItem
