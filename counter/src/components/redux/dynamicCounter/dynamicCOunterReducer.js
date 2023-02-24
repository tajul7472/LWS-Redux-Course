import { DDECREMENT, DINCREMENT } from "./actionTypes";

const initialState={
    value:20
}
const dynamicCOunterReducer = (state=initialState,action) => {
  switch (action.type) {
    case DINCREMENT:
        return{
            ...state,
            value:state.value+action.payload
        }
    case DDECREMENT:
        return{
            ...state,
            value:state.value-action.payload
        }
        
        
  
    default:
        return state
            
  }
}

export default dynamicCOunterReducer