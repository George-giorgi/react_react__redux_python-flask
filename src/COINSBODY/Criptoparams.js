import React from 'react'

export default function Cripto_params({item}) {
    return (
        
        <> 
            <td>{item.price}</td>
            <td>{item.one_day}</td>
            <td>{item.seven_day}</td>
            <td>{item.market_cap}</td>
            <td>{item.volume_24} <span className ="volumeBtc">{item.volume_24_btc}</span></td>
            <td>{item.Circulating_upply}</td>
            <td className ="chart">{item.poto}</td>
        </>
         
    )
}
