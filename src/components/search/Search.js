import React from 'react'
import "./search.scss"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function Search({show_search}){
    const [inp_value, set_inpValue] = useState("")
    console.log(inp_value)
    return (
        <div className = "wrapp_search_inp">
            <div className ="inp_exit">
                <div className = "search_inpp">
                    <SearchIcon />
                    <input
                    value={inp_value}
                    onChange ={(e)=>set_inpValue(e.target.value)} 
                    className ="inp"
                    placeholder = "What are you looking for?" 
                    autoFocus
                    />
                </div>
                <p 
                className="exit"
                onClick = {()=>show_search(false)}
                ></p>
            </div> 
        </div>
    )
}
