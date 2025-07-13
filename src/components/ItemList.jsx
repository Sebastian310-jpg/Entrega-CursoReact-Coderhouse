import "../styles/ItemList.scss";
import { Link } from "react-router-dom"

const ItemList = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`} className="item-link" >
        <div className="item">
        <div className="item__image">
            <img src={product.image} alt={product.name} />
        </div>

        <div className="item__info">
            <div className="item__name">{product.name}</div>
            <div className="item__price">${product.price.toFixed(2)}</div>
        </div>
        </div>
    </Link>
  )
}

export default ItemList
