import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import logo from "../images/logo.png";

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container navbar fixed-top">
            <img className="nav-brand" src={logo} alt="" />
            <ul className=" pt-4 nav-link">
                <li><Link to={"/home"}>Home</Link></li>
                <li>Destination</li>
                <li> <Link to={"/registeredEvents"}>Events</Link></li>
                <li>Blog</li>
                {!loggedInUser.user ? <li className="btn btn-primary">Register</li> : <li>{loggedInUser.user}</li>}
                <li className="btn btn-dark">Admin</li>
            </ul>
        </div>
    );
};

export default Navbar;