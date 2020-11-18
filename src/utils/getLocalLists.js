const getLocalLists = (setILists, setAllTasks) => {
    if (localStorage.getItem('lists') === null) {
        localStorage.setItem('lists', JSON.stringify([]));
    } else {
        let listsLocal = JSON.parse(localStorage.getItem("lists"));
        setILists(listsLocal);
    }
    if (localStorage.getItem('tasks') === null) {
        localStorage.setItem('tasks', JSON.stringify([]));
    } else {
        let tasksLocal = JSON.parse(localStorage.getItem("tasks"));
        setAllTasks(tasksLocal);
    }
};

export default getLocalLists;