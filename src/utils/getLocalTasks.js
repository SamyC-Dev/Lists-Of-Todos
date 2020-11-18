const getLocalTasks = (setAllTasks) => {
    if (localStorage.getItem('tasks') === null) {
        localStorage.setItem('tasks', JSON.stringify([]));
    } else {
        let tasksLocal = JSON.parse(localStorage.getItem("tasks"));
        setAllTasks(tasksLocal);
    }
};

export default getLocalTasks;