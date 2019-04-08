import React from 'react';

/**
 * Card component receiving data from Carousel component rendering the actual cards
 * @param {*} props 
 */
function Card(props) {
    return (
        <div className="carousel-holder">
            <div className="carousel-item" style={{backgroundImage: "url(" + props.thumb + ")"}}> 
                <a href="/">
                    <div className="card-description">
                        <div className="image-name">{props.alt}</div>
                        <div className="image-description">100+ Inspirational images</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card;