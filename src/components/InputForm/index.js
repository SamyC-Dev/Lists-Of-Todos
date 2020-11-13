import React from 'react';
import firebase from '../Firebase/firebase'
import { v4 as uuidv4 } from 'uuid';


const InputForm = ({ inputList, setInputList, setILists, AllLists }) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        setILists([...AllLists, {
            id: uuidv4(),
            title: inputList,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }])
        setInputList('');
    };

    return (
        <div className="field has-addons">
            <div className="control is-expanded">
                <input
                    value={inputList}
                    onChange={(e) => setInputList(e.target.value)}
                    className="input is-primary"
                    type="text"
                    placeholder="Entrer un nom de liste..." />
            </div>
            <div className="control">
                <button onClick={handleSubmit} className="button is-primary">Crée liste</button>
            </div>
        </div>
    );
};

export default InputForm;







