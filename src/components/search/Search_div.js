import React from 'react'
import {useState} from "react"
import "./searchDiv.scss"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import RespBurgClik from '../responsive_burgerClik/RespBurgClik';

export default function Search({show_search}) {
  
    const [show_resp, setshow_resp] = useState(false)
    
    return (
        <div className = "wrapp_searchSendvich">
                <p
                 className = "search"
                 onClick ={()=>show_search(true)}
                 >
                    <SearchIcon className="searchicon" style={{marginRight: "5px"}} />
                    <span >Search</span>
                </p>
                {/* // responsivze qveda */}
                <p className = "sendvich_search">
                    <SearchIcon 
                    className="searchIconResponcive" 
                    onClick ={()=>show_search(true)}
                    />

                    <MenuIcon 
                    onClick ={()=> setshow_resp(!show_resp)}
                    className ="burgerIcon" />
                </p>
                <RespBurgClik
                 show = {show_resp} 
                 set_show = {setshow_resp}
                />
        </div>
    )
}
