import React from 'react';
import eventObj from './eventObjData';

const Userevents = (props) => {
    const deleteEvent = (e) => {
        fetch(`http://localhost:2020/delete/${props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',               
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    const img = eventObj.find(x => x.name === props.name)
    return (
        <div style={{ border: "1px solid lightgray", display: "flex", justifyContent: "space-between" }} className="col-md-6">
            <img style={{ width: "150px" }} src={require(`../images/${img.pic}`)} alt="" />
            <div>
                <h1>{props.name}</h1>
                <h3>{props.time}</h3>
                <button onClick={() => deleteEvent(`'${props.id}'`)} className="btn btn-danger">Delete</button>git
            </div>
        </div>
    );
};

export default Userevents;