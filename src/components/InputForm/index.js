import React from 'react';
import addUserList from '../../utils/addUserList';


const InputForm = ({ inputList, setInputList, setILists, AllLists, uid }) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        addUserList(inputList, uid)
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







