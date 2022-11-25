import React from 'react';
import insta from "../components/images/insta.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return (
    <div className='navbar'>
      <img src={insta} alt="instalogoimage"/>

      <ul>
        <Link to="/signup">
        <li> SignUp</li>
        </Link>

        <Link to="/signin">
        <li> SignIn</li>
        </Link>

        <Link to="/profile">
        <li> Profile</li>
        </Link>

        <Link to="/Createpost">
        <li> Create Post</li>
        </Link>
        
       
      </ul>
    </div>
  )
}
