import '../styles/CartWidget.scss'
import carritoDeCompras from '../assets/img/carrito.png'

const CartWidget = () => {
  return (
    <div>
        <a href="#" className="carrito-contenedor">
            <img src={carritoDeCompras} alt="Carrito de Compras" />
        </a>
    </div>
  )
}

export default CartWidget