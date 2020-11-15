import React from 'react';
import { Link } from 'react-router-dom';


const OneList = ({ id, title, createdAt, setILists, AllLists, AllTasks, setAllTasks }) => {

    const removeList = id => {
        const newLists = [...AllLists].filter(list => list.id !== id);
        const newtasks = [...AllTasks].filter(task => task.ownerList !== id)
        setILists(newLists);
        setAllTasks(newtasks);
    };

    const tasksList = AllTasks.filter(task => task.ownerList === id)

    return (
        <div className="box has-background-primary">
            <nav className="level">
                <div className="level-left">
                    <div className="level-item is-flex-direction-column is-align-items-flex-start">
                        <p className="subtitle is-3 has-text-white mb-1">{title}</p>
                        <p className="subtitle is-5">Tasks: {tasksList.length} </p>
                        <p className="subtitle is-6 mt-2 has-text-white-ter"><small>Posté le:</small> {createdAt}</p>
                    </div>
                </div>
                <div className="level-right">
                    <p
                        onClick={() => removeList(id)}
                        className="level-item"
                    ><strong> <span className="icon is-clickable">
                        <i className="far fa-trash-alt has-text-danger title is-4 "></i>
                    </span></strong></p>
                    <Link
                        to={{
                            pathname: `/liste/${title}`,
                            state: { id, title }
                        }}
                        className="level-item"
                    ><strong> <span className="icon is-clickable">
                        <i className="far fa-arrow-alt-circle-right has-text-light title is-3"></i>
                    </span></strong></Link>
                </div>
            </nav>
        </div >
    );
};

export default OneList;