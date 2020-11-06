// import React from 'react';
// import { useState } from 'react';
// import firebase from '../../utils/firebaseConfig';
// import { v4 as uuidv4 } from 'uuid';

// function Test() {
    //const [listes, setListes] = useState('');

    //const ref = firebase.firestore().collection('listes'); // ref collection listes
    // const refUsers = firebase.firestore().collection('users'); // ref collection users



    // ADD CURRENT USER
    // function addCurrentUser(user) {
    //     refUsers
    //         .doc(`user-${uid}`)
    //         .set({
    //             displayName: user.displayName,
    //             email: user.email,
    //             uid: user.uid,
    //             photoURL: user.photoURL,
    //         })
    //         .then(function () {
    //             console.log("user enregistrer");
    //         })
    //         .catch(function (error) {
    //             console.error("Error adding document: ", error);
    //         });
    // }


    // ADD FUNCTION
    // function addSchool() {
    //     const newListes = {
    //         id: uuidv4(),
    //         title: 'une liste 2',
    //         owner: uid,
    //         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //         lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    //     };
    //     ref
    //         .doc()
    //         .set(newListes)
    //         .then(function () {
    //             console.log("ajout nickel");
    //         })
    //         .catch((err) => {
    //             console.error('les problemes:', err);
    //         });
    // }


    // REALTIME GET FUNCTION
    // function getSchools() {
    //     ref
    //         .where('owner', '==', uid)
            //.where('owner', '==', currentUserId)
            //.where('title', '==', 'School1') // does not need index
            //.where('score', '<=', 10)    // needs index
            //.orderBy('owner', 'asc')
            //.limit(3)
//             .onSnapshot((querySnapshot) => {
//                 const items = [];
//                 querySnapshot.forEach((doc) => {
//                     items.push(doc.data());
//                 });
//                 setListes(items)
//             });
//         console.log(listes);
//     }




//     return (
//         <div>
//             <h1>je suis le composant test</h1>
//             <button onClick={() => addSchool()}>Add</button>
//             <button onClick={() => getSchools()}>Get</button>

//         </div>
//     );
// };

// export default Test;
