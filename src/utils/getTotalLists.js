import firebase from "../components/Firebase/firebase";

const DBLists = firebase.firestore().collection('lists'); // ref collection lists

function getTotalLists(setListsloading, setTotalLists) {
    setListsloading(true);
    DBLists.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setTotalLists(items.length);
        setListsloading(false);
    });
};

export default getTotalLists;