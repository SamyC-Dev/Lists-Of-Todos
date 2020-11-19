import React from 'react';

const InputForm = ({ inputValue, setInputValue, placeholder, handleSubmit, textSubmitButton, colorButton }) => {

    return (
        <form className="field has-addons">
            <div className="control is-expanded">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="input is-primary"
                    type="text"
                    placeholder={placeholder} />
            </div>
            <div className="control">
                <button onSubmit={handleSubmit} onClick={handleSubmit} className={`button is-${colorButton}`} disabled={inputValue.length < 1 ? true : false} >{textSubmitButton}</button>
            </div>
        </form>
    );
};

export default InputForm;







