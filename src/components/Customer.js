import React from 'react'

const style = {
    border: '1px solid black',
    height: '250px',
    width: '200px'
}

export const Customer = props => (
    <div style={style}>
        { props.name }
    </div>
)
