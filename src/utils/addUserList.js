import firebase from "../components/Firebase/firebase";
import { v4 as uuidv4 } from 'uuid';

const DBLists = firebase.firestore().collection('lists'); // ref collection tasks

function addUserList(inputList, uid) {

    const newListes = {
        id: uuidv4(),
        title: inputList,
        owner: uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    };
    DBLists
        .doc()
        .set(newListes)
        .then(function () {
            console.log("ajout nickel");
        })
        .catch((err) => {
            console.error('les problemes:', err);
        });

};

export default addUserList;