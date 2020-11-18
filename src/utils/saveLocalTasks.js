const saveLocalTasks = (AllTasks) => {
    localStorage.setItem('tasks', JSON.stringify(AllTasks));
};

export default saveLocalTasks;