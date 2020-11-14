import React from 'react';

const OneList = ({ id, title, tasks, createdAt, setILists, AllLists }) => {

    const removeList = id => {
        const newLists = [...AllLists].filter(list => list.id !== id);
        setILists(newLists);
    };


    return (
        <div className="box has-background-primary">
            <nav className="level">
                <div className="level-left">
                    <div className="level-item is-flex-direction-column is-align-items-flex-start">
                        <p className="subtitle is-3 has-text-white mb-1">{title}</p>
                        <p className="subtitle is-5">Tasks: {tasks.length}</p>
                        <p className="subtitle is-6 mt-2 has-text-white-ter"><small>Posté le:</small> {createdAt}</p>
                    </div>
                </div>
                <div className="level-right">
                    <p
                        onClick={() => removeList(id)}
                        className="level-item"
                    ><strong> <span className="icon is-clickable">
                        <i className="far fa-trash-alt has-text-danger title is-4 mr-5"></i>
                    </span></strong></p>
                    <p
                        onClick={() => console.log('cc')}
                        className="level-item"
                    ><strong> <span className="icon is-clickable">
                        <i className="far fa-arrow-alt-circle-right has-text-light title is-3"></i>
                    </span></strong></p>
                </div>
            </nav>
        </div>
    );
};

export default OneList;