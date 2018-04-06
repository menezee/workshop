import { combineReducers } from 'redux'

import CustomerReducer from './CustomerReducer'
import ProjectReducer from './ProjectsReducer'

export default combineReducers({
    CustomerReducer,
    ProjectReducer
})
