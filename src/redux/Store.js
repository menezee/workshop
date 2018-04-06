import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import RootReducer from '../redux/reducers'

const middlewares = applyMiddleware(createLogger())

export default createStore(RootReducer, middlewares)