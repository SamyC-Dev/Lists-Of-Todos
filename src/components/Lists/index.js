import React, { useEffect } from 'react';

import OneList from '../OneList';

import getListsWhereUser from '../../utils/getListsWhereUser'

const Lists = ({ AllLists, setloaderList, setILists, uid, loaderList }) => {

    const MyLists = AllLists.map(list => {
        return <OneList key={list.id} id={list.id} titre={list.title} />
    })

    useEffect(() => {

        getListsWhereUser(setloaderList, setILists, uid);

    }, [AllLists, setloaderList, setILists, uid]);

    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-8-tablet is-7-desktop is-6-widescreen">
                    {AllLists && MyLists}
                </div>
            </div>
        </div>
    );
};

export default Lists;