import useProducts from "../hooks/useProducts.js"
import ItemList from "./ItemList.jsx"
import Loading from "./Loading.jsx"
import { useParams } from "react-router-dom"
import "../styles/ItemListContainer.scss"

const ItemListContainer = () => {
    const { productsCategory } = useParams()
    const { products, loading } = useProducts(productsCategory)

    return (
      <div className="products-container">
        {
            loading ? <Loading /> : products.map(product => <ItemList product={product} key={product.id} />)
        }
      </div>
    );
};

export default ItemListContainer;
