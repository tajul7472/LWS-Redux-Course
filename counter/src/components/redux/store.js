import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import myLogger from './midddleWare/mylogger'

const store = createStore(rootReducer, applyMiddleware(logger,myLogger))

export default store