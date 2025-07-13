import { useEffect, useState } from "react"
import { getProducts } from "../data/products.js"

const useProducts = (productsCategory) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        getProducts()
            .then((data) => {
                if (productsCategory) {
                    const productsFilteredByCategory = data.filter((product) => product.category.toLowerCase() === productsCategory.toLowerCase())
                    setProducts(productsFilteredByCategory)
                } else {
                    setProducts(data)
                }
            })
            .finally(() => setLoading(false))
    }, [productsCategory])

    return { products, loading }
}

export default useProducts