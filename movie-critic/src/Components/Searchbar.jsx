import React, {useState} from 'react';
import '../Style.css'
import { Input } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

export default function Searchbar(){
    const [title, setTitle] = useState('')
    let history = useHistory()
    function handleSubmit(event){
        event.preventDefault()
        history.push(`/search?query=${title}`)
        window.location.reload()
        setTitle('')
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <div style={{backgroundColor: 'white'}}>
                <input placeholder= "Search for movies" className="searchbar" 
                    onChange = {(event) => setTitle(event.target.value)}
                    value={title} ></input>
            </div>
        </form>
    )
}