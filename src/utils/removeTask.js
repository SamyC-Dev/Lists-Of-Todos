const removeTask = (id, AllTasks, setAllTasks) => {
    const newtasks = [...AllTasks].filter(task => task.id !== id)
    setAllTasks(newtasks);
};

export default removeTask;