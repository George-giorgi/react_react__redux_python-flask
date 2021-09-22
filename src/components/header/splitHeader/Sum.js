import React from 'react'
import "./sum.scss"
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

export default function Sum() {
    return (
        <div className="wrapp_sum">
            <p>
                <span className = "about">Cryptos:</span>
                <span className = "number">11,954</span>
            </p>
            <p>
                <span className = "about">Exchanges:</span>
                <span className = "number">4</span>
            </p>
            <p>
                <span className = "about">Market Cap:</span>
                <span className = "number">$2,148,950,440,101</span>
            </p>
            <p>
                <span className = "about">24h Vol:</span>
                <span className = "number">$90,197,647,324</span>
            </p>
            <p>
                <span className = "about">Dominance:</span>
                <span className = "number">BTC: 42.3% ETH: 18.8%</span>
            </p>
            <p>
                <LocalGasStationIcon className="ethGas" />
                <span className = "about">ETH Gas:</span>
                <span className = "number">11,954</span>
            </p>
            
        </div>
    )
}
