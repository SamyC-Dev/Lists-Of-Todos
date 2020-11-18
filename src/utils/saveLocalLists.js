const saveLocalLists = (AllLists, AllTasks) => {
    localStorage.setItem('lists', JSON.stringify(AllLists));
    localStorage.setItem('tasks', JSON.stringify(AllTasks));
};

export default saveLocalLists;