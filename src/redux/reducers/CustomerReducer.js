import { ADD_CUSTOMER } from '../types'

export const INITIAL_STATE = {
    customers: ['Globo']
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        default:
            return state
    }
}