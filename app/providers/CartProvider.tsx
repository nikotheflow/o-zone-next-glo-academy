"use client";

import {createContext, ReactNode, useContext, useState} from "react";
import {CartContextType} from "../models/cart-context.model";
import {Product} from "../models/product.model";
import {CartItem} from "../models/cart-item";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Cart context not found");
  }

  return context;
}

export default function CartProvider({children}: {children: ReactNode}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const productCartItem = cartItems.find(item => item.id === product.id);
    const newCartItems = productCartItem ? cartItems.map(item => {
      if (item.id === product.id) {
        item.count++;
      }
      return item;
    }) : [...cartItems, {...product, count: 1}]

    setCartItems(newCartItems);
  }

  const removeFromCart = (cartItem: CartItem) => {
    const newCartItems = cartItems.map(item => {
      if (item.id === cartItem.id) {
        item.count--;
      }

      return item;
    }).filter(item => item.count > 0);

    setCartItems(newCartItems);
  }

  return (
    <CartContext.Provider value={{isOpen, cartItems, setIsOpen, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}