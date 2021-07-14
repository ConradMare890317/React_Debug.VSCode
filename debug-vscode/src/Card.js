import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
//    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
const {index, picture, city, address} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {city}<br />
                    {address}
                </p>
                
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;

// <ul className="features">
//                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
//                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
//                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
//                </ul>

// Removed between <p></p> and <div></div>