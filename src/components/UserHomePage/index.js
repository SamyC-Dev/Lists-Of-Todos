import React, { useContext } from 'react';
import { AuthContext } from "../../utils/auth/Auth";
import './styles.css';


function UserHomePage() {
    const { currentUser } = useContext(AuthContext);
    const { displayName } = currentUser;
    return (
        <div>
            <div  >
                <div></div>
                <div >
                    <h1>Bienvenue {displayName}</h1>
                </div>
            </div>
        </div>
    );
};

export default UserHomePage;
