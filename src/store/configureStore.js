import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import rootReducer from '../reducer'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const configureStore = initialState => createStoreWithMiddleware(
  rootReducer,
  initialState,
  reduxDevTools
)

export default configureStore
