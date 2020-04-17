import React, { useState } from 'react'

import './styles.css'

export default function Header(props) {
    return (
        <header>
            <p><span className="hit">Hits</span> <br/> {props.hits}</p>

            <p>Limit: <br/><input 
                type="number"
                value={props.limit}
                autoComplete="off"
                onChange={e => props.setLimit(e.target.value)}
                min="1"
            ></input></p>

            <p><span className="error">Errors</span> <br/> {props.errors}</p>
        </header>
    );
}