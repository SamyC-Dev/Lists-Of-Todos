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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className="listContainer">
                <div className="listContainer_left">
                    <div>
                        <p className="subtitle is-3 has-text-white mb-1">{title}</p>
                        <p className="is-size-5">Tasks: {tasksList.length} </p>

                        <p><span onClick={() => removeList(id)} className="has-text-danger is-clickable">Supprimer</span></p>
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
                            <i className="far fa-arrow-alt-circle-right has-text-light title is-3"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default OneList;