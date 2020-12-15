import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Userevents from './Userevents';
import { UserContext } from '../App';

const RegEvents = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userEvent, setuserEvent] = useState([]);
    useEffect(() => {
        fetch('http://localhost:2020/getEvents?email='+loggedInUser.email,{
            method:'GET', 
            })
            .then(res => res.json())
            .then(data => {
                // const filteredData = data.find(x => x.email === loggedInUser.email);
                setuserEvent(data)
            })
    }, [])
    return (
        <div className="container">
            <Navbar></Navbar>
            <div className="row" style={{ marginTop: "10%" }}>
                {
                    userEvent.map(x => <Userevents id={x._id} name={x.eventName} time={x.time}></Userevents>)
                }
            </div>

        </div>
    );
};

export default RegEvents;