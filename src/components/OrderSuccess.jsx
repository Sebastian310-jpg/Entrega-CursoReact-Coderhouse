import { Link } from "react-router-dom"
import "../styles/OrderSuccess.scss"

const OrderSuccess = ({ orderId }) => {
    return (
        <div className="order-success">
            <h2 className="order-success__title">🎉 Orden generada correctamente 🎉</h2>
            <p className="order-success__text">
                Guarde el Identificador de su orden: <span className="order-success__id">{orderId}</span>
            </p>
            <Link to="/" className="order-success__btn">Volver al Inicio</Link>
        </div>
    )
}

export default OrderSuccess;
