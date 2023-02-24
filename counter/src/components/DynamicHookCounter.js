import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/dynamicCounter/actions'

const DynamicHookCounter = () => {
    const count = useSelector((state) => state.dynamicCounter.value)
    const dispatch = useDispatch()

    const incrementHandelar = (value) => {
        dispatch(increment(value))
    }

    const decrementHandaler = (value) => {
        dispatch(decrement(value))
    }
    return (
        <div>
        <span>Dynamic Hook Counter</span>
            <div>{count}</div>
            <div>
                <button onClick={()=> incrementHandelar(5)}>Increment</button>
                <button onClick={()=> decrementHandaler(2)}>Decrement</button>
            </div>
        </div>
    )
}

export default DynamicHookCounter