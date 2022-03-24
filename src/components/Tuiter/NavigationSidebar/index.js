import React from "react";
import {Link} from "react-router-dom";

const Navigationsidebar = (
    {
        activeParam, size
    }) => {
        if (size==="xxl") {
            return (
                <>
                    <div className="list-group">
                        <Link to="/" className="list-group-item" href="/">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/tuiter/home" className={`list-group-item ${activeParam === 'home' ? 'active' :''}`}>
                            <i className="fa fa-home"></i> Home
                        </Link>
                        <Link to="/tuiter/explore" className={`list-group-item ${activeParam === 'explore' ? 'active' :''}`}>
                            <i className="fas fa-hashtag"></i> Explore
                        </Link>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-bell"></i> Notifications
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-envelope"></i> Messages
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-bookmark"></i> Bookmarks
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-list"></i> Lists
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-user"></i> Profile
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-circle"></i> More
                        </a>
                    </div>
                    <div className="d-grid mt-2">
                        <a href="../tuit.html"
                           className="btn btn-primary btn-block rounded-pill">
                            Tweet</a>
                    </div>
                </>
            );
        }
        else {
            return (
                <>
                    <div className="list-group">
                        <Link to="/" className="list-group-item" href="/">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/tuiter/home" className={`list-group-item ${activeParam === 'home' ? 'active' :''}`}>
                            <i className="fa fa-home"></i>
                        </Link>
                        <Link to="/tuiter/explore" className={`list-group-item ${activeParam === 'explore' ? 'active' :''}`}>
                            <i className="fas fa-hashtag"></i>
                        </Link>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-bell"></i>
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-bookmark"></i>
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-list"></i>
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-user"></i>
                        </a>
                        <a className="list-group-item" href="/">
                            <i className="fas fa-circle"></i>
                        </a>
                    </div>
                    <div className="d-grid mt-2">
                        <a href="../tuit.html"
                           className="btn btn-primary btn-block rounded-pill">
                            Tweet</a>
                    </div>
                </>
            );
        }
    }

export default Navigationsidebar;