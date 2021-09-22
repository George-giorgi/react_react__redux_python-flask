import React from 'react'
import "./exchangeHover.scss"
import {useSelector} from "react-redux"



const imagePATH = process.env.REACT_APP_PUBLIC_IMAGE

export default function ExchangeHover() {
    
    const selec_resp = useSelector(state => state.responsive.exchangeHover)
    const selectBurgerClik = useSelector(state => state.responsive.burgerClick)

 
    return (
        
        <div
            className = {!selectBurgerClik? "Wrapp_exchangeHover ": "show_click"}
            style ={!selec_resp ?{display: "none"}:{}}
        >
            <p>
                <img src = {`${imagePATH}poloniexx.png`} alt="img" />
                Poloniex
            </p>
            <p>
            <img src ={`${imagePATH}binance.png`} alt="img" />
                Binance
            </p>
            <p>
            <img src ={`${imagePATH}coinbase.png`} alt="img" />
                Coinbase
            </p>
        </div>
    )
}
