import React from 'react';
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

// Import function
import removeList from '../../utils/removeList';


const OneList = ({ id, title, createdAt, setILists, AllLists, AllTasks, setAllTasks }) => {

    const tasksList = AllTasks.filter(task => task.ownerList === id);
    const taskListNotCompleted = tasksList.filter(task => task.completed === false);

    return (
        <div className="box has-background-primary">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="listContainer">
                <div className="listContainer_left">
                    <div>
                        <p className="title is-3 has-text-white mb-3">{title}</p>
                        <div className="tags has-addons">
                            <span className="tag is-link is-medium">{tasksList.length > 1 ? "Tâches: " : "Tâche: "}</span>
                            <span className="tag is-black is-medium">{taskListNotCompleted.length}/{tasksList.length}</span>
                            <span className="tag is-danger is-medium ml-2">
                                Supprimer
                            <button onClick={() => {
                                    if (taskListNotCompleted.length > 0) {
                                        confirmAlert({
                                            title: 'Attention',
                                            message: `il reste ${taskListNotCompleted.length === 1 ? `il vous reste ${taskListNotCompleted.length} tâche` : `il vous reste ${taskListNotCompleted.length} tâches`}`,
                                            buttons: [
                                                {
                                                    label: 'Yes',
                                                    onClick: () => removeList(id, AllLists, AllTasks, setILists, setAllTasks)
                                                },
                                                {
                                                    label: 'No',
                                                    onClick: () => console.log("Remove canceled")
                                                }
                                            ]
                                        });
                                    } else {
                                        removeList(id, AllLists, AllTasks, setILists, setAllTasks);
                                    };
                                }} className="delete"></button>
                            </span>
                        </div>
                        <p className="subtitle is-6 mt-2 has-text-white-ter"><small>Posté le:</small> {createdAt}</p>
                    </div>
                </div>
                <div className="listContainer_right">
                    <Link
                        to={{
                            pathname: `/liste/${title}`,
                            state: { id, title }
                        }}>
                        <span className="icon is-clickable">
                            <i className="fas fa-arrow-right has-text-light title is-3"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default OneList;