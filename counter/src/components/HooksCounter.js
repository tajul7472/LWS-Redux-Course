import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counter/actions'

const HooksCounter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const incrementHandelar = () => {
        dispatch(increment())
    }

    const decrementHandaler = () => {
        dispatch(decrement())
    }
    return (
        <div>
        <span>Hooks Counter</span>
            <div>{count}</div>
            <div>
                <button onClick={ incrementHandelar}>Increment</button>
                <button onClick={ decrementHandaler}>Decrement</button>
            </div>
        </div>
    )
}

export default HooksCounter