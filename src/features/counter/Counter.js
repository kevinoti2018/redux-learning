import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,
    decrement,
    reset,
    incrementByValue}
     from './counterSlice'
import {useState} from "react"
const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) ||0;

    const resetAll = ()=>{
        setIncrementAmount(0)
        dispatch(reset())
    }
  return (
    <div>
        <button
        onClick={()=>dispatch(increment())}
        >
            +
        </button>
        <p>{count}</p>
        <button
        onClick={()=>dispatch(decrement())}
        >
            -
        </button>

    <hr/>
        <input 
        type='text'
        value={incrementAmount}
        onChange={(e)=> setIncrementAmount(e.target.value)}
        />

        <div>
            <button
            onClick={()=> dispatch(incrementByValue(addValue))}
            >Add Amount</button>
            <button
            onClick={resetAll}
            >Reset</button>
        </div>
    </div>
  )
}

export default Counter