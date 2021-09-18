import React from 'react';

const Card = (props) => {
    return(
        <div className="cards">
            <div className="card">
                <div className="img-thumb">
                    <img  src="https://placeimg.com/200/150/any" alt="dummy-img" />
                </div>
                <div className="content">
                    <p className="card-title">{props.data.title}</p>
                    <p className="card-body">{props.data.body}</p>
                    <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Card;