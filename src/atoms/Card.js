import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card">
            <img alt="TrainingPal" src={props.img} />
            <Link className="actLink" to={"/" +props.link}>{props.title}</Link>
        </div>
    )
}

export default Card;