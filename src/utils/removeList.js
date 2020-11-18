const removeList = (id, AllLists, AllTasks, setILists, setAllTasks) => {
    const newLists = [...AllLists].filter(list => list.id !== id);
    const newtasks = [...AllTasks].filter(task => task.ownerList !== id)
    setILists(newLists);
    setAllTasks(newtasks);
};

export default removeList;