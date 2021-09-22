import React from 'react'
import "./coinsbody.scss"

import Forresphead from './Forresphead'
import Criptoparams from './Criptoparams'

import {nameData} from "../DATA/coiNamesData"
import {coinsParams} from "../DATA/coinsParams"

export default function Coinsbody() {
    return (
        <div className ="Wrapp_Coinsbody">
            <div className = "wrapp_table1">
                <table>
                    <tbody>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                        </tr>
                        {
                            nameData.map((item, i)=>{

                                return(
                                    <tr key ={i} className ="trow pointer"> 
                                         <Forresphead
                                         
                                          item = {item} 
                                          />
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>

            <div className ="wraap_table2">
                <table>
                    <tbody>
                        <tr>
                            <th>Price</th>
                            <th>24h %</th>
                            <th>7d %</th>
                            <th>Market Cap</th>
                            <th>Volume(24h)</th>
                            <th>Circulating Supply</th>
                            <th>Last 7 Days</th>
                        </tr>
                        {
                            coinsParams.map((item, i)=>{
                                return(
                                    <tr key ={i}  className ="trow">
                                        
                                        <Criptoparams
                                       
                                        item = {item}
                                        />
                                     </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
      
    )
}
