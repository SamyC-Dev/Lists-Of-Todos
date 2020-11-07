import firebase from "../components/Firebase/firebase";

const DBUsers = firebase.firestore().collection('users'); // ref collection users

const addCurrentUser = (user) => {
    DBUsers
        .doc(`user-${user.uid}`)
        .set({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime
        })
        .then(function () {
            console.log(`user ${user.displayName} enregistré`);
        })
        .catch(function (error) {
            console.error("Erreur d'ajout user DB: ", error);
        });
}

export default addCurrentUser;