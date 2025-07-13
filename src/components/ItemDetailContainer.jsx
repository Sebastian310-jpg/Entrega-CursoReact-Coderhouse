import "../styles/ItemDetailContainer.scss"
import useProduct from "../hooks/useProduct.js"
import Loading from "./Loading"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { productId } = useParams()
    const { product, loading } = useProduct(productId)

    return (
        <div className="product-container">
            {
                loading ? <Loading /> : <ItemDetail product={product} />
            }
        </div>
    )
}

export default ItemDetailContainer