import React, { useState } from 'react';
import './styles.css';

import InputForm from '../InputForm';
import Lists from '../Lists';


function UserListPage() {
    const [AllLists, setILists] = useState([]);
    const [inputList, setInputList] = useState('');
    const [loaderList, setloaderList] = useState('');
    console.log("valeur ds input:", inputList);
    console.log("listes tableau:", AllLists);
    return (
        <div className="">
            <div className="container has-text-centered ">
                <h1 className="title is-size-2 my-1">Bienvenue</h1>
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
            <section className="section ">
                <h2 className="title is-size-3 has-text-centered">Mes listes</h2>
                <Lists AllLists={AllLists} setILists={setILists} loaderList={loaderList} />
            </section>
        </div>
    );
};

export default UserListPage;
