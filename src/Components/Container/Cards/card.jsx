import React from 'react';

const Card = (props) => {
    return(
        <div className="cards">
            <div >
                <div className="img-thumb">
                    <img  src="https://placeimg.com/200/150/any" alt="dummy-img" />
                </div>
                <div className="content">
                    <p className="card-title">{props.title}</p>
                    <p className="card-body">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;