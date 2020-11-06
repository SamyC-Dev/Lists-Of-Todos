import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from "../../utils/auth/Auth";
import firebase from '../Firebase/firebase';
import './styles.css';


function Navbar() {
    const history = useHistory();
    const { currentUser } = useContext(AuthContext);
    console.log('currentUser ds Navbar:', currentUser);
    const logOut = (history) => {
        firebase.auth().signOut();
        history.push('/')
    };

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" exact to={"/"}>List Of Todos</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <NavLink className="nav-link active mr-3" exact to={"/"}>Home <span className="sr-only">(current)</span></NavLink>
                        <NavLink className="nav-link active mr-3" exact to={"/about"}>About <span className="sr-only">(current)</span></NavLink>
                        {!currentUser ?
                            <button onClick={() => history.push('/login')} className="btn btn-outline-primary btn-sm" type="submit">Connexion</button> :
                            <button onClick={() => logOut(history)} className="btn btn-outline-primary btn-sm" type="submit">deconnexion</button>}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
