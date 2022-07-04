import React from 'react';
import AddPersonFrom from './AddPersonForm';
import PeopleList from './PeopleList';

// Fake data
const contacts = ["Daniel", "Omar", "Amir", "Joseph", "Mary"];




export default function MainDemo(){
    return(
        <div>
            <AddPersonFrom />
            <PeopleList data = {contacts} />
        </div>
    );
}
