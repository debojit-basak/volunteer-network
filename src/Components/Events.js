import React from 'react';
import { Link } from 'react-router-dom';

const Events = ({ events }) => {

    return (
        <div className="col-md-3 event">
            <Link to={"/register/"+ events.id}>
                <img src={require(`../images/${events.pic}`)} alt="" />
                <h3 style={{ background: `${events.color}` }}>{events.name}</h3>
            </Link>

        </div>
    );
};

export default Events;