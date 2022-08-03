import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({children}) => {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);


    const addToCart = (product, quantity) => {
        // To check for the product in the cart using .find()
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        
        // Key elements .map(), spread operator
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if(checkProductInCart) {

            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct, 
                    quantity: cartProduct.quantity + quantity
                }
            })

            setCartItems(updatedCartItems);
        } else {
            // This code runs if we don't have this specific item in the cart

            product.quantity = quantity;

            setCartItems([...cartItems, { ...product}]);

        }
        


    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    };
    
    









    return (
        <Context.Provider 
        value={
            {
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                addToCart,
            }
        }
        >
        {children}</Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
