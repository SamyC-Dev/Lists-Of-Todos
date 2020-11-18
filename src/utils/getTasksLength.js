const getTasksLength = (setTotalTasks) => {
    if (localStorage.getItem('tasks') !== null) {
        let taskLocal = JSON.parse(localStorage.getItem("tasks"));
        setTotalTasks(taskLocal.length)
    }
};

export default getTasksLength;