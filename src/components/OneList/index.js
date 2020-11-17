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
                        <p className="title is-3 has-text-white mb-3">{title}</p>
                        <div className="tags has-addons">
                            <span className="tag is-link is-medium">{tasksList.length > 1 ? "Tâches: " : "Tâche: "}</span>
                            <span className="tag is-black is-medium">{tasksList.length}</span>
                            <span className="tag is-danger is-medium ml-2">
                                Supprimer
                            <button onClick={() => removeList(id)} className="delete"></button>
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