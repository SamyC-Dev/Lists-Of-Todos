import React, { useRef, useEffect } from 'react';

const InputForm = ({ inputValue, setInputValue, placeholder, handleSubmit, textSubmitButton, colorButton }) => {

    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus(), []);

    return (
        <form className="field has-addons">
            <div className="control is-expanded">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    ref={inputRef}
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







