import React from 'react';

import OneList from '../OneList';


const Lists = ({ AllLists }) => {

    const MyLists = AllLists.map(list => {
        return <OneList key={list.id} id={list.id} titre={list.title} />
    })

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                    {MyLists}
                </div>
            </div>
        </div>
    );
};

export default Lists;