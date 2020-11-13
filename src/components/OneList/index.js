import React from 'react';



const OneList = () => {

    return (
        <div className="box">

            <nav className="level">

                <div className="level-left">
                    <div className="level-item is-flex-direction-column">
                        <p className="subtitle is-3"><strong>Titre</strong></p>
                        <p className="subtitle is-5">Nb Tasks: 2</p>
                        <p className="subtitle is-7 mt-2"><small>Posté le:</small> 21/02/1982</p>
                    </div>
                </div>
                <div className="level-right">
                    <p className="level-item"><strong>Sup</strong></p>
                </div>
            </nav>
        </div>
    );
};

export default OneList;