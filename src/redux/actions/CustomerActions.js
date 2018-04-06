import { ADD_CUSTOMER } from '../types'

export const addCustomer = customer => ({
    type: ADD_CUSTOMER,
    payload: customer
})
