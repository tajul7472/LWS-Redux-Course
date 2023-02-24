import { combineReducers } from "redux"
import counterReducer from "./counter/counterReducer"
import dynamicCOunterReducer from "./dynamicCounter/dynamicCOunterReducer"


const rootReducer= combineReducers({
    counter:counterReducer,
    dynamicCounter:dynamicCOunterReducer
})


export default rootReducer