import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="app-navbar-container">
                <div className="navbar">
                    <Link to='/'><i className="fa fa-fw fa-home"></i> Home</Link>
                    <Link to='/notifications'><i className="fa fa-fw fa-bell-o"></i> Notifications</Link>
                    <Link to='/discover'><i className="fa fa-fw fa-hashtag"></i> Discover</Link>
                    <Link to='/me'><i className="fa fa-fw fa-user"></i> Me</Link>
                </div>
            </div>
        );
    }
}

export default NavBar;
