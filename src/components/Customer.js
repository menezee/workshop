import React from 'react'
import { Link } from 'react-router-dom'

const style = {
    border: '1px solid black',
    height: '250px',
    width: '200px'
}

export const Customer = props => (
    <div style={style}>
        <Link to={{pathname: '/projects', state: { project: props.name }}} >
            { props.name }
        </Link>

    </div>
)
