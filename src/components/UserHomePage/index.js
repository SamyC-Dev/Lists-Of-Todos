import React, { useContext } from 'react';
import { AuthContext } from "../../utils/auth/Auth";
import './styles.css';

import InputForm from '../InputForm';
import Lists from '../Lists';


function UserHomePage() {
    const { currentUser } = useContext(AuthContext);
    const { displayName } = currentUser;
    return (
        <div>
            <div className="container has-text-centered">
                <h1 className="title is-size-2 my-1">Bienvenue</h1>
                <h2 className="title is-size-3 my-1">{displayName}</h2>
            </div>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                            <InputForm />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ">
                <div className="container">
                    <h2 className="title is-size-3 has-text-centered">Mes listes</h2>
                    <Lists />
                </div>

            </section>
        </div>
    );
};

export default UserHomePage;
