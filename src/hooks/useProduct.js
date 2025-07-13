import { useEffect, useState } from "react"
import { getProductsById } from "../data/products.js"

const useProduct = (productId) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductsById(productId)
            .then((data) => setProduct(data))
            .finally(() => setLoading(false))
    }, [productId])

    return { product, loading }
}

export default useProduct