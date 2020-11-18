const getListsLength = (setTotalLists) => {
    if (localStorage.getItem('lists') !== null) {
        let listsLocal = JSON.parse(localStorage.getItem("lists"));
        setTotalLists(listsLocal.length)
    }
};

export default getListsLength;