import React from 'react';
import AddPersonFrom from './AddPersonForm';
import PeopleList from './PeopleList';
import { useState } from 'react';



export default function ContactManager(props){
    const [contacts, setContacts] = useState(props.data);


    function addPerson(name){
        setContacts([...contacts], name);
    }
    return(
        <div>
            <AddPersonFrom handleSubmit ={addPerson} />
            <PeopleList data ={contacts}/>
        </div>
    );
}