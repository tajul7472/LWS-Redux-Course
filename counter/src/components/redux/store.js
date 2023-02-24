import { applyMiddleware, createStore } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import myLogger from './midddleWare/mylogger'
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,myLogger)))

export default store