import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const InputForm = ({ inputValue, setInputValue, setData, Data }) => {


    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...Data, {
            id: uuidv4(),
            title: inputValue,
            createdAt: new Date().toLocaleString(),
        }])
        setInputValue('');
    };

    return (
        <div className="field has-addons">
            <div className="control is-expanded">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
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







