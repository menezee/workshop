import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Customer } from '../components'
import { addCustomer } from '../redux/actions'

const style = {
    display: 'flex'
}

class Customers extends Component {

    state = { customerInput: '' }

    render() {
        const { customerInput } = this.state
        const { customers, addCustomer } = this.props

        const customersList = customers.map((customer, index) => (
            <Customer key={index} name={customer} />
        ))

        return (
            <div style={{...style}}>
                <div style={{...style, flexDirection: 'column', height: '800px', width: '250px', border: '1px solid black', marginRight: '10px'}} >
                    <input style={{height: '20px'}} placeholder='customer name' value={customerInput} onChange={e => { this.setState({customerInput: e.target.value}) }} />
                    <button type='button' onClick={() => { addCustomer(customerInput) }}>
                        insert customer
                    </button>
                </div>
                <div style={style}>
                    { customersList }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    customers: state.CustomerReducer.customers
})

const mapDispatchToProps = dispatch => ({
    addCustomer: project => { dispatch(addCustomer(project)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Customers)
