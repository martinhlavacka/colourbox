import React from 'react';
import Card from './Card';

/**
 * Carousel component passing data obtained from getImages() to Card component
 * @param {*} props 
 */
function Carousel(props) {
    return (
        <div className="slider-container">
            {props.pictures.slice(0,props.amount).map(item =>(
                <Card key={item.id} alt={item.title} thumb={item.thumbnail_url}  />
            ))}
        </div>
    )
}

export default Carousel