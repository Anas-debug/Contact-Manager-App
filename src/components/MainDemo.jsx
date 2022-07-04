import React from 'react';
import { ReactDOM } from 'react';
import AddPersonFrom from './AddPersonForm';
import ContactManager from './ContactManager';
import PeopleList from './PeopleList';

// Fake data
const contacts = ["Daniel", "Omar", "Amir", "Joseph", "Mary"];

const el = (
    <div>
        <AddPersonFrom />
        <PeopleList data = {contacts} />
    </div>
);

ReactDOM.render(el , document.getElementById('root'));