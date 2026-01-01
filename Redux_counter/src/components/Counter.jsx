import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../State/Counter/counterSlice';
import { store } from '../State/store';

function Counter() {

    const dispatch = useDispatch();
    console.log(store.getState())
    const count = useSelector((state) => { return state.counter.count })

    console.log(count)
    return (
        <>

            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button ><br /><br />
            <button onClick={() => dispatch(decrement())} > decrement</button ><br /><br />
            <button onClick={() => dispatch(reset())} > reset</ button>
        </>
    )
}

export default Counter