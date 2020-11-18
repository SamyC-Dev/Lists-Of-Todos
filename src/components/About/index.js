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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsam repudiandae dolor ab, neque voluptatem a expedita nam possimus quas nostrum esse, cupiditate aspernatur iusto doloremque facilis
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
