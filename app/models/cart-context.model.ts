import {Product} from "../models/product.model";
import {CartItem} from "../models/cart-item";

export interface CartContextType {
  isOpen: boolean,
  cartItems: CartItem[],
  setIsOpen: (value: boolean) => void,
  addToCart: (product: Product) => void,
}