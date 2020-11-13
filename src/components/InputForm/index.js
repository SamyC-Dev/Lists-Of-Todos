import React from 'react';


const InputForm = () => {

    return (
        <div className="field has-addons">
            <div className="control is-expanded">
                <input className="input is-primary" type="text" placeholder="Entrer un nom de liste..." />
            </div>
            <div className="control">
                <button className="button is-primary">Crée liste</button>
            </div>
        </div>
    );
};

export default InputForm;







