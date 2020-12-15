import React from 'react';
import eventObj from './eventObjData';
import Events from './Events';
import Navbar from './Navbar';

const Home = () => {
    
    return (
        <div className="head">
            <div className="homee">
                <Navbar></Navbar> <br /><br /><br /> <br />
                <h1 className="text-center ">I Grow By Helping People In need</h1> <br />
                <input style={{ marginLeft: "34%", height: "38px", width: "350px" }} type="text" placeholder="Search...." />&nbsp;<button className="btn btn-primary">Search</button>
            </div>
            <div style={{ marginTop: "-10%" }} className="container">
                <div className="row">
                    {
                        eventObj.map(x => <Events events={x}></Events>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;