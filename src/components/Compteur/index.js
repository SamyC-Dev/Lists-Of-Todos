import React from 'react';


const Compteur = ({ title, countUserList }) => {

    return (
        <div>
            <h3 className=" title is-size-4">{countUserList} {title}</h3>
        </div>
    );
};

export default Compteur;
