import React from 'react'

export default function For_resp({item}) {
    return (
        <>
            <td className ="index">{item.id}</td>
            <td>{item.name} <span className ="short_name">{item.shortname}</span> </td>
        </>
    )
}
