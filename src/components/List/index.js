import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const List = () => {
    let location = useLocation();
    const [AllTasks, setAllTasks] = useState([]);

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
    console.log("tache par liste:", tasksOfList);


    useEffect(() => {
        getLocalTasks();
    }, []);

    useEffect(() => {
        saveLocalTasks();
    }, [AllTasks]);

    console.log("les taches:", AllTasks);


    return (
        <div className="container has-text-centered">
            <h1 className="title is-size-2 my-1 has-text-white">{location.state.title}</h1>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setAllTasks([...AllTasks, {
                        id: uuidv4(),
                        title: 'test tasks...',
                        ownerList: location.state.id,
                        completed: false,
                        createdAt: new Date().toLocaleString(),
                    }])
                }}
            >test</button>
        </div>

    );
};

export default List;

