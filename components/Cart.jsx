import React from 'react';
import { useStateContext } from '../context/StateContext';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { useRef } from 'react';
import getStripe from '../lib/getStripe';

const Cart = ({ closeCart }) => {

  const cartRef = useRef(); 

  const { incQty, decQty, qty, cartItems, totalPrice, totalQuantities, toggleCartItemQuantity, onRemove } = useStateContext();

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch('/api/stripe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cartItems),
  //   });

  //   if(response.statusCode === 500) return;

  //   const data = await response.json();

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // }


  return (
    <>
      <div className="cart-component" ref={cartRef}>
      <div className="top-side">
        <button onClick={() => {closeCart(false)}}>X</button>
        <h4>Your cart</h4>
        <p>({totalQuantities}) items</p>
      </div>

      { cartItems.length < 1 && (
        <div className='empty-cart'>
          <h3>Your cart is empty</h3>
          <Link href={'/'}>
            <button onClick={() => {closeCart(false)}}>Continue Shopping</button>
          </Link>
        </div>
      )}


          <div className="product-cart-wrapper">
        {cartItems.length >= 1 && cartItems.map((item) => (
          <div className='product-cart-component' key={item._id}>

            <img src={urlFor(item?.image)} width='100' alt="" />
            <div className="product-details-cart">
            <div className="name-price">

              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
              <div className="btns-cart">
                  <button onClick={() => toggleCartItemQuantity(item._id, 'dec')} className='minus'>-</button>
                  <p className='qty-cart'>{item.quantity}</p>
                  <button onClick={() => toggleCartItemQuantity(item._id, 'inc')} className='plus'>+</button>
                  <button onClick={() => onRemove(item)} className='remove-item'>Remove</button>
              </div>

            </div>
          </div>
        ))}    
          </div>
          { cartItems.length >= 1 && (
            <div className="total-qty">
              <h3>Total price:</h3>
              <h3>${totalPrice}</h3>
              <div className="payment">
                <button className='buy'>Pay with Stripe</button>
              </div>
            </div>
          )}
      </div>   
     </>
  )
}

export default Cart