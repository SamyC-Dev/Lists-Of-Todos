import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

// Import components
import InputForm from '../InputForm';
import Lists from '../Lists';

// Import function
import saveLocalLists from '../../utils/saveLocalLists';
import getLocalLists from '../../utils/getLocalLists';


function UserListPage() {

    const [AllLists, setILists] = useState([]);
    const [AllTasks, setAllTasks] = useState([]);
    const [inputList, setInputList] = useState('');

    const handleSubmitList = (e) => {
        e.preventDefault();
        setILists([...AllLists, {
            id: uuidv4(),
            title: inputList,
            createdAt: new Date().toLocaleString(),
        }])
        setInputList('');
    };


    useEffect(() => getLocalLists(setILists, setAllTasks), []);
    // eslint-disable-next-line
    useEffect(() => saveLocalLists(AllLists, AllTasks), [AllLists, AllTasks]);


    return (
        <div>
            <div className="container has-text-centered">
                <h1 className="title is-size-2 my-1 has-text-white">Bienvenue</h1>
            </div>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                            <InputForm handleSubmit={handleSubmitList} inputValue={inputList} setInputValue={setInputList} placeholder={"Créer une liste..."} textSubmitButton={"Créer liste"} colorButton={"primary"} />
                        </div>
                    </div>
                </div>
            </section>
            {AllLists.length > 0 ?
                <section className="section ">
                    <h2 className="title is-size-3 has-text-centered has-text-white">{AllLists.length > 1 ? "Mes listes " : "Ma liste "}<span className="tag is-primary title is-size-6">{AllLists.length}</span></h2>
                    <Lists AllLists={AllLists} setILists={setILists} AllTasks={AllTasks} setAllTasks={setAllTasks} />
                </section> :
                <h2 className="title is-size-3 has-text-centered has-text-white">Vous n'avez pas encore de liste 👻</h2>}
        </div>
    );
};

export default UserListPage;
