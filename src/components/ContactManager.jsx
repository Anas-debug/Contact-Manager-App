import React from 'react';
import { useState } from 'react';

function ContactManager(){
    const [contacts, setContacts] = useState(props.data);

    return(
        <div>
            <AddPersonFrom />
            <PeopleList data ={contacts}/>
        </div>
    );
}