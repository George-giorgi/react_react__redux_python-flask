import React from 'react'
import {useState} from "react"
import "./respburgclik.scss"

import {useDispatch} from "react-redux"
import ExchangeHover from '../exchangeHover/ExchangeHover'

export default function RespBurgClik({show, set_show}) {
    const [transErrow, setTransErrow] = useState(false)
    
    const dispatch = useDispatch()
    
    return (
        <div
        className = {!show ?"wrapp_burgerClik" : "wrapp_burgerClik respp" }
        >
            <div className ="head_resp">
                <div className ="logo_name">
                    <p className ="log_img"></p>
                    <p className ="log_name">{show && "GeoGioCoinMarketCap"}</p>
                </div>
                <p
                onClick ={()=> [set_show(false), dispatch({type: "reset"})]}
                className ="close_burger"
                >
                </p>
            </div>
            
            <div 
                className ="exch"
                
                onClick = {()=> [setTransErrow(!transErrow),dispatch({type: "changeExlist"})]}
                >
                <p>{show &&"Exchanges"}</p>
                <p className={transErrow? "down_errow anime_errow" :"down_errow" }></p>
            
            </div>
            <ExchangeHover />
        </div>
    )
}
