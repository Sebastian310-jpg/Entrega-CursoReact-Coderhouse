import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart"
import "../styles/CartContainer.scss"

const CartContainer = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(CartContext)


  return (
    <div className="cart-container">
        <h2>Carrito de Compras</h2>

        {
            cart.length === 0 ? (
                <p className="cart__empty">El carrito está vacío.</p>
            ) : (
                <ItemCart cart={cart} deleteProductById={deleteProductById} />
            )
        }

        <div className="cart__footer">
            <h3>Total Carrito: ${totalPrice().toFixed(2)}</h3>
            <div className="cart__buttons">
                <button className="cart__btn cart__btn--empty" onClick={clearCart}>Vaciar Carrito</button>
                <Link to="/checkout" className="cart__btn cart__btn--buy">Comprar</Link>
            </div>
        </div>
    </div>
  )
}

export default CartContainer