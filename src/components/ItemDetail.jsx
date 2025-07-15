import "../styles/ItemDetail.scss"
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
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

        <div className="item-detail__actions">
            <button className="item-detail__btn">Añadir al Carrito</button>
            <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
