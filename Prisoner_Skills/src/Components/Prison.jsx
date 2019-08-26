import React from 'react'

function Prison ({ props }) {
    return(
        <div>
            <h2>{props.Name}</h2>
            <p>{props.Workers}</p>
            <p>{props.Total}</p>
            <p>{props.location}</p>

            
        </div>
    )
}