import React from 'react'
import {useState} from "react"
import "./logo.scss"

import SearchDiv from '../../search/Search_div';
import Search from '../../search/Search';
import ExchangeHover from '../../exchangeHover/ExchangeHover';

import {useDispatch} from "react-redux"

export default function Logo() {
    const [showsearch, setshowsearch] = useState(false)
    
    const dispatch = useDispatch()
    
    return (
        <div className ="Logo">
            <div className = "wrapp_Logoname_exchange">
                <div className = "wrapp_Logoname">
                    <p className ="logo_imge"></p>
                    <p className = "logoName">GeoGioCoinMarketCap</p>
                </div>
                <p 
                className ="exchange"
                onMouseOver = {()=>dispatch({type: "change"})}
                >Recomended Exchanges
                </p>
                <ExchangeHover/>
            </div>

            {
                !showsearch ?
                <SearchDiv 
                show_search = {setshowsearch} 
                />:
                <Search
                show_search = {setshowsearch}
                />
            }
            
        </div>
    )
}
