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
                        <p className="subtitle is-5">Nb Tasks: {tasks.length}</p>
                        <p className="subtitle is-6 mt-2 has-text-white-ter"><small>Posté le:</small> {createdAt}</p>
                    </div>
                </div>
                <div className="level-right">
                    <p
                        onClick={() => removeList(id)}
                        className="level-item"
                    ><strong>X</strong></p>
                </div>
            </nav>
        </div>
    );
};

export default OneList;