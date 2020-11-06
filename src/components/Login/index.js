import React from 'react';

// Import firebase && login ui
import firebase from '../Firebase/firebase';
import uiConfig from '../Firebase/uiConfig';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function Login() {

    return (
        <div>
            <h1>Login Page</h1>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    );
};

export default Login;
