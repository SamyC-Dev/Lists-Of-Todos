import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import getTotalUsers from '../../utils/getTotalUsersCount';
import getTotalLists from '../../utils/getTotalLists';
import getTotalTasks from '../../utils/getTotalTasks';
import spinnerImage from '../../assets/spinner.gif'

function HomePage() {
    const history = useHistory();
    const [usersloading, setUsersloading] = useState(false);
    const [listloading, setListsloading] = useState(false);
    const [taskloading, setTaskloading] = useState(false);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalLists, setTotalLists] = useState(0);
    const [totalTasks, setTotalTasks] = useState(0);

    useEffect(() => {
        getTotalUsers(setUsersloading, setTotalUsers);
        getTotalLists(setListsloading, setTotalLists);
        getTotalTasks(setTaskloading, setTotalTasks);
    }, [totalUsers, totalLists, totalTasks]);

    return (
        <section className="hero is-black is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-size-1">List Of Todos</h1>
                    <hr className="has-background-primary" style={{ width: '20%', margin: '0 auto' }} />
                    <h2 className="subtitle is-size-3 my-5">Gagnez en productivité, libérez votre mémoire <span className="has-text-primary">.</span></h2>
                    <p className="is-size-5 my-5">Creez des Listes/Taches/ListesDeTaches</p>
                    <button onClick={() => history.push('/login')} className="button is-primary is-outlined mt-2">Connectez-vous</button>
                    <nav className="level my-6">
                        <div className="level-item has-text-centered my-6">
                            <div>
                                <p className="heading is-size-5"><span className="has-text-primary">Utilisateur{totalUsers > 1 && 's'}</span></p>
                                <p className="title">{usersloading ? <img src={spinnerImage} style={{ width: '1.1em' }} alt="loader" /> : totalUsers}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered my-6">
                            <div>
                                <p className="heading is-size-5"><span className="has-text-primary">Listes</span></p>
                                <p className="title">{listloading ? <img src={spinnerImage} style={{ width: '1.1em' }} alt="loader" /> : totalLists}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered my-6">
                            <div>
                                <p className="heading is-size-5"><span className="has-text-primary">Taches</span></p>
                                <p className="title">{taskloading ? <img src={spinnerImage} style={{ width: '1.1em' }} alt="loader" /> : totalTasks}</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
