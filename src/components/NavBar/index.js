/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from "../../utils/auth/Auth";
import firebase from '../Firebase/firebase';
import './styles.css';


function Navbar() {
    const history = useHistory();
    const [isActive, setisActive] = useState(false);
    const { currentUser } = useContext(AuthContext);
    console.log('currentUser ds Navbar:', currentUser);

    const logOut = (history) => {
        firebase.auth().signOut();
        history.push('/');
    };

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
                                {!currentUser ?
                                    <button onClick={() => history.push('/login')} className="button is-primary is-outlined">Connexion</button> :
                                    <button onClick={() => logOut(history)} className="button is-danger is-outlined">Deconnexion</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
