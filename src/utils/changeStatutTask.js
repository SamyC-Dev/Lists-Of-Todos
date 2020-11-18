const changeStatutTask = (id, AllTasks, setAllTasks) => {
    const newTasks = AllTasks.map((task) => {
        const taskCopy = { ...task };
        if (taskCopy.id === id) taskCopy.completed = !taskCopy.completed;
        return taskCopy;
    });
    setAllTasks(newTasks);
};

export default changeStatutTask;