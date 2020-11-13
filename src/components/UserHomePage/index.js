import React, { useContext, useState } from 'react';
import { AuthContext } from "../../utils/auth/Auth";
import './styles.css';

import InputForm from '../InputForm';
import Lists from '../Lists';




function UserHomePage() {
    const { currentUser } = useContext(AuthContext);
    const { displayName, uid } = currentUser;
    const [AllLists, setILists] = useState([]);
    const [inputList, setInputList] = useState('');
    const [loaderList, setloaderList] = useState('');

    return (
        <div className="">
            <div className="container has-text-centered ">
                <h1 className="title is-size-2 my-1">Bienvenue</h1>
                <h2 className="title is-size-3 my-1">{displayName}</h2>
            </div>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                            <InputForm inputList={inputList} setInputList={setInputList} setILists={setILists} AllLists={AllLists} uid={uid} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ">
                <h2 className="title is-size-3 has-text-centered">Mes listes</h2>
                <Lists AllLists={AllLists} setloaderList={setloaderList} setILists={setILists} uid={uid} loaderList={loaderList} />
            </section>
        </div>
    );
};

export default UserHomePage;
