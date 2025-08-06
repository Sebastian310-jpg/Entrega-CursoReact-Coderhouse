import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaRegTrashCan } from "react-icons/fa6"
import "../styles/ItemCart.scss"

const ItemCart = ({ cart, deleteProductById }) => {

    const { updateQuantity } = useContext(CartContext)

    const handleClickIncrement = (product) => product.quantity < product.stock && updateQuantity(product.id, product.quantity + 1)
    const handleClickDecrement = (product) => product.quantity > 1 && updateQuantity(product.id, product.quantity - 1)

  return (
    <div className="cart__items">
        {cart.map((product) => (
            <div className="cart__item" key={product.id}>
            <img className="cart__image" src={product.image} alt={product.name} />

            <div className="cart__info">
                <h4 className="cart__name">{product.name}</h4>
                <p className="cart__price">${product.price}</p>

                <div className="cart__quantity-controls">
                    <span>Cantidad: {product.quantity}</span>
                    <button onClick={ () => handleClickDecrement(product) }>-</button>
                    <button onClick={ () => handleClickIncrement(product) }>+</button>
                </div>

                <p className="cart__total">
                Total: ${(product.price * product.quantity).toFixed(2)}
                </p>
            </div>

            <button className="cart__btn cart__btn--delete" onClick={() => deleteProductById(product.id)}>
                <FaRegTrashCan />
            </button>
            </div>
        ))}
    </div>
  )
}

export default ItemCart;
