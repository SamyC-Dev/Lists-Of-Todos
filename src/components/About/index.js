import React from 'react';

function About() {

    return (
        <section className="hero is-black is-fullheight-with-navbar">
            <h1 className="title is-3 has-text-white mb-3 has-text-centered">A propos</h1>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <div className="box">
                                <div className="field has-text-centered">
                                    <h2 className="title is-4 has-text-dark">Bienvenue</h2>
                                </div>
                                <hr className="has-background-primary my-4" style={{ width: '20%', margin: '0 auto' }} />
                                <div className="field">
                                    <label htmlFor="description" className="label">Description</label>
                                    <p name="description">
                                        Je suis Samy Courouble, en reconversion professionnelle, j'ai quitté les chantiers ferroviaires où j'occupais le poste de chef d'équipe pour devenir développeur web et mobile. Ce petit projet a été créé pour alimenter mon portfolio. N'hésitez pas à me contacter pour d'éventuels renseignements.
                                    </p>
                                </div>
                                <hr className="has-background-primary my-4" style={{ width: '20%', margin: '0 auto' }} />
                                <div className="field">
                                    <label htmlFor="contact" className="label">Contact <i className="fas fa-envelope"></i></label>
                                    <p name="contact">samy.courouble@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
