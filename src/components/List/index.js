import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// Import components
import InputForm from '../InputForm';


const List = () => {
    let location = useLocation();
    const [AllTasks, setAllTasks] = useState([]);
    const [inputTasks, setInputTasks] = useState([]);

    const handleSubmitTask = (e) => {
        e.preventDefault();
        setAllTasks([...AllTasks, {
            id: uuidv4(),
            title: inputTasks,
            ownerList: location.state.id,
            completed: false,
            createdAt: new Date().toLocaleString(),
        }])
        setInputTasks('');
    };

    const saveLocalTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(AllTasks));
    };

    const getLocalTasks = () => {
        if (localStorage.getItem('tasks') === null) {
            localStorage.setItem('tasks', JSON.stringify([]));
        } else {
            let tasksLocal = JSON.parse(localStorage.getItem("tasks"));
            setAllTasks(tasksLocal);
        }
    };

    const tasksOfList = AllTasks.filter(task => task.ownerList === location.state.id)

    useEffect(() => getLocalTasks(), []);
    // eslint-disable-next-line
    useEffect(() => saveLocalTasks(), [AllTasks]);

    return (

        <div>
            <div className="container has-text-centered">
                <h1 className="title is-size-2 my-1 has-text-white">{location.state.title}</h1>
            </div>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                            <InputForm handleSubmit={handleSubmitTask} inputValue={inputTasks} setInputValue={setInputTasks} placeholder={"Créer une tache..."} textSubmitButton={"Créer tache"} />
                        </div>
                    </div>
                </div>
            </section>
            {AllTasks.length > 0 ?
                <section className="section ">
                    <h2 className="title is-size-3 has-text-centered has-text-white">Mes taches <span className="tag is-primary title is-size-6">{tasksOfList.length}</span></h2>
                    {/* <Lists AllLists={AllLists} setILists={setILists} AllTasks={AllTasks} setAllTasks={setAllTasks} /> */}
                </section> :
                <h2 className="title is-size-3 has-text-centered has-text-white">Vous n'avez pas encore de tache 👻</h2>}
        </div>
    );
};

export default List;

