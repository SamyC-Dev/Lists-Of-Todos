import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import firebase from "../../components/Firebase/firebase";
import addCurrentUser from '../AddCurrentUser';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
            user && addCurrentUser(user); // Add user in DB
            user && history.push('/userhomepage')
        });
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "80vh",
                }}
            >
                <h1>Loading User...</h1>
            </div>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
