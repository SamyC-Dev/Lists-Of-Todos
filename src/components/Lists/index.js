import React from 'react';
import spinnerImage from '../../assets/spinner.gif';

import OneList from '../OneList';


const Lists = ({ AllLists, setILists, loaderList }) => {

    const MyLists = AllLists.map(list => {
        return <OneList key={list.id} {...list} setILists={setILists} AllLists={AllLists} />
    });

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                    {loaderList ? <img src={spinnerImage} style={{ width: '1.1em' }} alt="loader" /> : MyLists}
                </div>
            </div>
        </div>
    );
};

export default Lists;