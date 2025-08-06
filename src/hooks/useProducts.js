import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../db/db.js"

const useProducts = (productsCategory) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        try {
            const dataDb = await getDocs( collection(db, "products") )

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            })

            setProducts(data)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    const getProductsByCategory = async () => {
        try {
            const capitalize = (string) => {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
            }

            const q = query( collection(db, "products"), where("category", "==", capitalize(productsCategory)) )

            const dataDb = await getDocs(q)

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            })

            setProducts(data)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(productsCategory){
            getProductsByCategory()
        } else {
            getProducts()
        }

    }, [productsCategory])

    return { products, loading }
}

export default useProducts