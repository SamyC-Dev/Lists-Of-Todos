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
            <nav className="level">
                <div className={`level-left `}>
                    <div className="level-item is-flex-direction-column is-align-items-flex-start">
                        <p className="subtitle is-3 has-text-white mb-3">{title}</p>
                        <p className="subtitle is-6 has-text-white-ter"><small>Posté le:</small> {createdAt}</p>
                    </div>
                </div>
                <div className="level-right">
                    <p
                        onClick={() => changeStatutTask(id)}
                        className="level-item">
                        <span className="icon is-clickable">
                            <i className="fas fa-check-square has-text-success title is-4"></i>
                        </span>
                    </p>

                    <p
                        onClick={() => removeTask(id)}
                        className="level-item"
                    ><strong> <span className="icon is-clickable">
                        <i className="far fa-trash-alt has-text-danger title is-4 "></i>
                    </span></strong></p>
                </div>
            </nav>
        </div >
    );
};

export default OneTask;