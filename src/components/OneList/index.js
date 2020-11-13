import React from 'react';



const OneList = ({ id, titre }) => {

    return (
        <div className="box has-background-primary">

            <nav className="level">

                <div className="level-left">
                    <div className="level-item is-flex-direction-column is-align-items-flex-start">
                        <p className="subtitle is-3 has-text-white mb-1">{titre}</p>
                        <p className="subtitle is-5">Nb Tasks: 2</p>
                        <p className="subtitle is-6 mt-2 has-text-white-ter"><small>Posté le:</small> 21/02/1982</p>
                    </div>
                </div>
                <div className="level-right">
                    <p className="level-item"><strong>X</strong></p>
                </div>
            </nav>
        </div>
    );
};

export default OneList;