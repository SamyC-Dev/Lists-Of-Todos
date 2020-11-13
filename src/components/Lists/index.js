import React from 'react';

import OneList from '../OneList';


const Lists = () => {

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                    <OneList />
                    <OneList />
                    <OneList />
                    <OneList />
                    <OneList />
                    <OneList />
                </div>
            </div>
        </div>
    );
};

export default Lists;