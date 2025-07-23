import "../styles/ItemDetail.scss"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"


const ItemDetail = ({ product = {} }) => {
    const { addProductInCart } = useContext(CartContext)

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

        <ItemCount stock={product.stock} addProduct={addProduct} />
      </div>
    </div>
  );
};

export default ItemDetail;
