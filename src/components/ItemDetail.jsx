import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import "../styles/ItemDetail.scss"


const ItemDetail = ({ product = {} }) => {
    const { cart, addProductInCart } = useContext(CartContext)

    const productInCart = cart.find((prod) => prod.id === product.id)
    const inCart = Boolean(productInCart)

    const addProduct = (quantity) => {
        const productCart = { ...product, quantity }
    
        addProductInCart(productCart)
    }

  return (
    <div className="item-detail">
      <div className="item-detail__image">
        <img src={product.image} />
      </div>

      <div className="item-detail__info">
        <h2>{product.name}</h2>
        <h4>{product.category}</h4>
        <h1>${product.price}</h1>
        <p>{product.description}</p>

        {
            inCart ? (
                <div className="item-detail__added">
                    <h3 className="added__text">Producto añadido al carrito</h3>
                    <Link to="/cart" className="added__btn">Ir al Carrito</Link>
                </div>
            ) : (
                <ItemCount stock={product.stock} addProduct={addProduct} />
            )
        }
      </div>
    </div>
  );
};

export default ItemDetail;
