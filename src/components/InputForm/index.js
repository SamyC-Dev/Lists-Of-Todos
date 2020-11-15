import React from 'react';

const InputForm = ({ inputValue, setInputValue, placeholder, handleSubmit, textSubmitButton }) => {

    return (
        <div className="field has-addons">
            <div className="control is-expanded">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="input is-primary"
                    type="text"
                    placeholder={placeholder} />
            </div>
            <div className="control">
                <button onClick={handleSubmit} className="button is-primary" disabled={inputValue.length < 1 ? true : false} >{textSubmitButton}</button>
            </div>
        </div>
    );
};

export default InputForm;







