import React from 'react'
import "./header.scss"

import Logo from './splitHeader/Logo'
import Sum from './splitHeader/Sum'

export default function Header() {

    return (
        <div className = "wrapp_header">
            <Logo />
            <Sum/>
        </div>
    )
}
