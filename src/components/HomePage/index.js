import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
    const history = useHistory();

    return (
        <section className="hero is-black is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-size-1">List Of Todos</h1>
                    <hr className="has-background-primary" style={{ width: '20%', margin: '0 auto' }} />
                    <h2 className="subtitle is-size-3 my-5">Gagnez en productivité, libérez votre mémoire <span className="has-text-primary">.</span></h2>
                    <p className="is-size-5 my-5">Creez des Listes/Taches/ListesDeTaches</p>
                    <button onClick={() => history.push('/login')} className="button is-primary is-outlined mt-2">Connectez-vous</button>
                    <nav class="level my-6">
                        <div class="level-item has-text-centered my-6">
                            <div>
                                <p class="heading is-size-5"><span className="has-text-primary">Utilisateurs</span></p>
                                <p class="title">3,456</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered my-6">
                            <div>
                                <p class="heading is-size-5"><span className="has-text-primary">Listes</span></p>
                                <p class="title">123</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered my-6">
                            <div>
                                <p class="heading is-size-5"><span className="has-text-primary">Taches</span></p>
                                <p class="title">456K</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
