import React from 'react';
import './styles.css';

// Import function
import removeTask from '../../utils/removeTask';
import changeStatutTask from '../../utils/changeStatutTask';


const OneTask = ({ id, title, completed, createdAt, AllTasks, setAllTasks }) => {

    return (
        <div className={!completed ? `box has-background-info` : "box isCompleted has-background-grey"}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="taskContainer">
                <div className="taskContainer_top_left">
                    <div style={{ display: "flex", alignItems: "center" }} className=" has-text-white">
                        <label className="checkbox ">
                            <input checked={completed} className="has-size-3" onChange={() => changeStatutTask(id, AllTasks, setAllTasks)} type="checkbox" />
                        </label>
                        <p className="subtitle is-3 has-text-white ml-3">{title}</p>
                    </div>
                    <p className="subtitle is-6 has-text-white-ter"><small>Posté le:</small> {createdAt}</p>
                </div>
                <div className="taskContainer_top_right">
                    <p>
                        <button onClick={() => removeTask(id, AllTasks, setAllTasks)} className="delete"></button>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default OneTask;