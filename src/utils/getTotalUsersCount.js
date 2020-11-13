import firebase from "../components/Firebase/firebase";

const DBUsers = firebase.firestore().collection('users'); // ref collection users

function getTotalUsers(setUsersloading, setTotalUsers) {
    setUsersloading(true);
    DBUsers.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setTotalUsers(items.length);
        setUsersloading(false);
    });
};

export default getTotalUsers;