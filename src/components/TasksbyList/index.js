import React from 'react';

// Import components
import OneTask from '../OneTask';


const TasksbyList = ({ AllTasks, setAllTasks, tasksOfList }) => {

    const tasksByList = tasksOfList.map(task => {
        return <OneTask key={task.id} {...task} AllTasks={AllTasks} setAllTasks={setAllTasks} />
    });

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                    {AllTasks && tasksByList}
                </div>
            </div>
        </div>
    );
};

export default TasksbyList;