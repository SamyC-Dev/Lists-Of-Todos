import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

// Import function
import getListsLength from "../../utils/getListsLength";
import getTasksLength from "../../utils/getTasksLength";


function HomePage() {

    const history = useHistory();
    const [totalLists, setTotalLists] = useState(0);
    const [totalTasks, setTotalTasks] = useState(0);

    useEffect(() => {
        getListsLength(setTotalLists);
        getTasksLength(setTotalTasks);
    }, []);

    let checkLists = () => {
        if (totalLists === 1) {
            return "Votre Liste"
        }
        else if (totalLists > 1) {
            return "Vos Listes"
        }
        else if (totalLists === 0) {
            return "Créer une liste"
        }
    }


    return (
        <section className="hero is-black is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-size-1">List Of Todos</h1>
                    <hr className="has-background-primary" style={{ width: '20%', margin: '0 auto' }} />
                    <h2 className="subtitle is-size-3 my-5">Gagner en productivité, libérer votre mémoire <span className="has-text-primary">.</span></h2>
                    <div className="is-size-4 my-5">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('<span>Créer des  </span>')
                                    .typeString('<span  style="color:#00D1B2;">listes.</span>')
                                    .pauseFor(1000)
                                    .deleteChars(7)
                                    .typeString('<span style="color:#3298DC;">tâches.</span>')
                                    .pauseFor(1000)
                                    .deleteChars(7)
                                    .typeString('<span style="color:#00D1B2;">listes</span> de <span style="color:#3298DC;">tâches.</span>')
                                    .start();
                            }}
                        />
                    </div>
                    <button onClick={() => history.push('/mylists')} className="button is-primary is-outlined mt-2">
                        {checkLists()}
                        {/* {totalLists > 0 ? "Vos Listes" : "Créer une liste"} */}
                    </button>
                    <nav className="level my-6">
                        <div className="level-item has-text-centered my-6">
                            <div>
                                <p className="heading is-size-5"><span className="has-text-primary">Liste{totalLists > 1 && 's'}</span></p>
                                <p className="title">{totalLists}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered my-6">
                            <div>
                                <p className="heading is-size-5"><span className="has-text-primary">Tâche{totalTasks > 1 && 's'}</span></p>
                                <p className="title">{totalTasks}</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </section>
    );
};

export default HomePage;
