import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App';
import logo from "../images/logo.png";
import eventObj from './eventObjData';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { key } = useParams();
    const clickedEvent = eventObj.find(x => x.id === key);
    const [eventTime,setEventTime] = useState({
        time: " ",
        eventName: " "
    });
    const handleEvents = (e) => {
        e.preventDefault()
        const newEvent = {...loggedInUser,...eventTime};
        newEvent.time = document.getElementById('tym').value;
        newEvent.eventName = document.getElementById('eName').value;
        setEventTime(newEvent);
        fetch('http://localhost:2020/addEvents',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())
        .then(data => {
           
        })

    }
    return (
        <div>
            <img className="Loginlogo" src={logo} alt="" />
            <div>
                <form className="register" >
                    <h3>Register as a Volunteer</h3>
                    <input type="text" value={loggedInUser.user} />
                    <input type="text" value={loggedInUser.email} />
                    <input type="datetime-local" name="" id="tym" />
                    <input type="text" placeholder="Description" id=""/>
                    <input type="text" value={clickedEvent.name} id="eName"/>
                    <button onClick={handleEvents} className="btn btn-primary"><Link className="text-white" to="/registeredEvents">Register</Link></button>
                    
                </form>
            </div>
        </div>
    );
};

export default Register;