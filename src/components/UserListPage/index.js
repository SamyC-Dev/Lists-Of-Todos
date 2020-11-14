import React, { useState, useEffect } from 'react';
import './styles.css';

// Import components
import InputForm from '../InputForm';
import Lists from '../Lists';


function UserListPage() {
    const [AllLists, setILists] = useState([]);
    const [inputList, setInputList] = useState('');

    const saveLocalLists = () => {
        localStorage.setItem('lists', JSON.stringify(AllLists));
    };

    const getLocalLists = () => {
        if (localStorage.getItem('lists') === null) {
            localStorage.setItem('lists', JSON.stringify([]));
        } else {
            let listsLocal = JSON.parse(localStorage.getItem("lists"));
            setILists(listsLocal);
        }
    };

    useEffect(() => {
        getLocalLists();
    }, []);

    useEffect(() => {
        saveLocalLists();
    }, [AllLists]);


    return (
        <div className="">
            <div className="container has-text-centered">
                <h1 className="title is-size-2 my-1 has-text-white">Bienvenue</h1>
            </div>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                            <InputForm inputValue={inputList} setInputValue={setInputList} setData={setILists} Data={AllLists} />
                        </div>
                    </div>
                </div>
            </section>
            {AllLists.length > 0 ? <section className="section ">
                <h2 className="title is-size-3 has-text-centered has-text-white">Mes listes <span className="tag is-primary title is-size-6">{AllLists.length}</span></h2>
                <Lists AllLists={AllLists} setILists={setILists} />
            </section> : <h2 className="title is-size-3 has-text-centered has-text-white">Vous n'avez pas encore de lists 👻</h2>}

        </div>
    );
};

export default UserListPage;
