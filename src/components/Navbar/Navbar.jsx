import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="nav">
        <div className="item">
        <div>
          <a>Home</a>
        </div>
        <div className="item active">
          <a>Profile</a>
        </div>
        <div>
          <a>Message</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
       </div>
      </nav>
    )
}
export default Navbar;