import { IoMdCart } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

import '../styles/CartWidget.scss'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

  return (
    <div>
        <Link to="/cart" className="cart-widget">
            <IoMdCart className="icon" />
            <h3>{totalQuantity()}</h3>
        </Link>
    </div>
  )
}

export default CartWidget