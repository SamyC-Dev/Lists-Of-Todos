import React from 'react';
import './styles.css';


const OneTask = ({ id, title, completed, createdAt, AllTasks, setAllTasks }) => {

    const removeTask = id => {
        const newtasks = [...AllTasks].filter(task => task.id !== id)
        setAllTasks(newtasks);
    };

    const changeStatutTask = id => {
        const newTasks = AllTasks.map((task) => {
            const taskCopy = { ...task };
            if (taskCopy.id === id) taskCopy.completed = !taskCopy.completed;
            return taskCopy;
        });
        setAllTasks(newTasks);
    };
    return (

        <div className={!completed ? `box has-background-info` : "box isCompleted has-background-grey"}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="taskContainer">
                <div className="taskContainer_top_left">
                    <div style={{ display: "flex", alignItems: "center" }} className=" has-text-white">
                        <label className="checkbox ">
                            <input className="has-size-3" onChange={() => changeStatutTask(id)} type="checkbox" />
                        </label>
                        <p className="subtitle is-3 has-text-white ml-3">{title}</p>
                    </div>
                    <p className="subtitle is-6 has-text-white-ter"><small>Posté le:</small> {createdAt}</p>
                </div>
                <div className="taskContainer_top_right">
                    <p>

                        <button onClick={() => removeTask(id)} className="delete"></button>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default OneTask;