/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './styles.css';


function Navbar() {
    const history = useHistory();
    const [isActive, setisActive] = useState(false);

    return (
        <div>
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink className="navbar-item has-text-primary" exact to={"/"}>List Of Todos</NavLink>
                    <a
                        onClick={() => setisActive(!isActive)} role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <NavLink className="navbar-item" exact to={"/"}>Home</NavLink>
                        <NavLink className="navbar-item" exact to={"/about"}>About</NavLink>
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={() => history.push('/mylists')} className="button is-primary is-outlined">Mes Listes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
