import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../styles/CartContainer.scss"

const CartContainer = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(CartContext)


  return (
    <div className="cart-container">
        <h2>Carrito de Compras</h2>

        <div className="cart__items">
            {
                cart.map((product) => (
                    <div className="cart__item" key={product.id}>
                        <img className="cart__image" src={product.image} alt={product.name} />

                        <div className="cart__info">
                            <h4 className="cart__name">{product.name}</h4>
                            <p className="cart__price">${product.price}</p>
                            <p className="cart__quantity">Cantidad: {product.quantity}</p>
                            <p className="cart__total">
                                Total: ${(product.price * product.quantity).toFixed(2)}
                            </p>
                        </div>

                        <button className="cart__btn cart__btn--delete" onClick={() => deleteProductById(product.id)}>Eliminar</button>
                    </div>
                ))
            }
        </div>

        <div className="cart__footer">
            <h3>Total Carrito: ${totalPrice().toFixed(2)}</h3>
            <div className="cart__buttons">
                <button className="cart__btn cart__btn--empty" onClick={clearCart}>Vaciar Carrito</button>
                <button className="cart__btn cart__btn--buy">Comprar</button>
            </div>
        </div>
    </div>
  )
}

export default CartContainer