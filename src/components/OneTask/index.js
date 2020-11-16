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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="taskContainer">
                <div className="taskContainer_left">
                    <div>
                        <div className=" has-text-white">
                            <p className="subtitle is-3 has-text-white mr-3">{title}</p>
                            <label className="checkbox mb-1">
                                <input onChange={() => changeStatutTask(id)} type="checkbox" />
                                Tache statut
                            </label>
                        </div>
                        <p className="subtitle is-6 has-text-white-ter"><small>Posté le:</small> {createdAt}</p>
                    </div>
                </div>
                <div className="taskContainer_right">
                    <p>
                        <span onClick={() => removeTask(id)} className="icon is-clickable">
                            <i className="far fa-trash-alt has-text-danger title is-4 "></i>
                        </span>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default OneTask;