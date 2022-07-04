import React from 'react';
import { useState } from 'react';


export default function AddPersonFrom(){
    const [person, setPerson] = useState("");

    function handleChange(e){
        setPerson(e.target.value);
    }

    function handleSubmit(){
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type ="text" placeholder='Add a new contact' onChange={handleChange} value={person}></input>
            <button type="submit">Add</button>
        </form>
    );
}