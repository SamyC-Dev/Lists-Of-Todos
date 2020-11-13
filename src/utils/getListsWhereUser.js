import firebase from "../components/Firebase/firebase";

const DBLists = firebase.firestore().collection('lists'); // ref collection lists

function getListsWhereUser(setloaderList, setILists, uid) {
    setloaderList(true);
    DBLists
        .where('owner', '==', uid)
        .get()
        .then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setILists(items);
            setloaderList(false);
        });
};

export default getListsWhereUser;