import '../styles/CartWidget.scss'
import { IoMdCart } from "react-icons/io";

const CartWidget = () => {
  return (
    <div>
        <a href="#" className="carrito-contenedor">
            <IoMdCart className="icon" />
        </a>
    </div>
  )
}

export default CartWidget