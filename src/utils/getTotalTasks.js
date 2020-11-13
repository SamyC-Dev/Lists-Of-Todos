import firebase from "../components/Firebase/firebase";

const DBTasks = firebase.firestore().collection('tasks'); // ref collection tasks

function getTotalTasks(setTaskloading, setTotalTasks) {
    setTaskloading(true);
    DBTasks.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setTotalTasks(items.length);
        setTaskloading(false);
    });
};

export default getTotalTasks;