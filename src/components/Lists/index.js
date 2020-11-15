import React from 'react';

// Import components
import OneList from '../OneList';


const Lists = ({ AllLists, setILists, AllTasks, setAllTasks }) => {

    const MyLists = AllLists.map(list => {
        return <OneList key={list.id} {...list} setILists={setILists} AllLists={AllLists} AllTasks={AllTasks} setAllTasks={setAllTasks} />
    });

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                    {AllLists && MyLists}
                </div>
            </div>
        </div>
    );
};

export default Lists;