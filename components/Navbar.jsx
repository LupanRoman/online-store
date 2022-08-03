import React, { useState } from 'react';
import { BsFillKeyboardFill, BsFillCartFill } from 'react-icons/bs';
import Link from 'next/link';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const [showCart, setShowCart] = useState(false);
  const { totalQuantities } = useStateContext();

  return (
    <>
    <div className="nav-bar-component">
    <Link href={'/'}>
      <div className="left">
      <p><BsFillKeyboardFill /></p>
        <h5>Keyboard Store</h5>
      </div>
    </Link>


      <div className="right">
        <button onClick={() => {setShowCart(true)}} ><BsFillCartFill />
        <span className='cart-qty'>{totalQuantities}</span></button>
      </div>

      { showCart && <Cart closeCart={setShowCart} />}

    </div>
    </>
  )
}

export default Navbar