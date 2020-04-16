import React from 'react'

import './styles.css'

export default function Header(props) {
    return (
        <header>
            <p><span className="hit">Hits</span> <br/> {props.hits}</p>
            <p><span className="error">Errors</span> <br/> {props.errors}</p>
        </header>
    );
}