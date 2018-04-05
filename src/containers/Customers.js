import React, { Component } from 'react'
import { Customer } from '../components'

const style = {
    display: 'flex'
}

class Customers extends Component {

    render() {
        const customers = this.props.customers.map((customer, index) => (
            <Customer key={index} name={customer} />
        ))

        return (
            <div style={style}>
                { customers }
            </div>
        )
    }
}

export default Customers
