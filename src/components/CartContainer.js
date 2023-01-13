import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import {clearCart} from '../features/cart/cartSlice'

const CartContainer = () => {
    const dispatch = useDispatch()
    
    const clear = ()=>{
        dispatch(clearCart())
        console.log('clicked');
    }
    
    const{total,amount,cartItems} = useSelector(state=>state.cart)
    if(amount <1){
        <section className='cart'>
            <header>
                <h2>Your bag</h2>
                <h4 className='empty-cart' >is currently empty</h4>
            </header>
        </section>
    }
  return (
    <div>
    <section className='cart'>
    <header>
        <h2>Your bag</h2>
    </header>
    <div>
            {cartItems.map((item)=>(
               <CartItem key={item.id} {...item}/>
            ))}
    </div>
    <footer>
    <div className='cart-total'>
    <hr/>
    <h4> total <span>$ {total}</span> </h4>
    </div>
    <button 
    onClick={clear} 
    className='btn clear-btn'
      > Clear Cart </button>
    </footer>
</section>
    </div>
  )
}

export default CartContainer