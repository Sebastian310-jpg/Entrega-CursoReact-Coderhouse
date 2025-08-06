import { useState, useContext } from "react"
import { addDoc, collection } from "firebase/firestore"
import db from "../db/db.js"
import { CartContext } from "../context/CartContext"
import FormCheckout from "./FormCheckout"
import OrderSuccess from "./OrderSuccess.jsx"
import "../styles/Checkout.scss"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "",
    })

    const [orderId, setOrderId] = useState(null)

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name] : event.target.value })
    }

    const sendOrder = (event) => {
        event.preventDefault()

        const order = {
            client: { ...dataForm },
            products:  [ ...cart ],
            totalPrice: totalPrice().toFixed(2),
            date: new Date(),
        }

        uploadOrder(order)
        clearCart()
    }

    const uploadOrder = async (order) => {
        try {
            const orderReference = collection(db, "orders")

            const response = await addDoc(orderReference, order)

            setOrderId(response.id)
            
        } catch (error) {
            console.log("Error al subir la orden.")
        }
    }

  return (
    <div className="checkout">
        <h2 className="checkout__title">Finalizar Compra</h2>

        {
            orderId ? (
                <OrderSuccess orderId={orderId} />
            ) : (
                <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder} />
            )
        }
        
    </div>
  )
}

export default Checkout