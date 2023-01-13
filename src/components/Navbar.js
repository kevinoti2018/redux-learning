import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './navbar.css'
import calculateTotals from '../features/cart/cartSlice'
const Navbar = () => {
    const dispatch = useDispatch()
    const amount = useSelector(state=>state.cart.amount)
  return (
    <div className='container'>
        <div className='title'>Redux Toolkit</div>
        <div className='counter'>counter <span>{amount}</span> </div>
    </div>
  )
}

export default Navbar