import '../styles/NavBar.scss'
import logoEcommerce from '../assets/img/logo-ecommerce.png'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="navbar-container">
        <div className="nav__logo">
            <img src={logoEcommerce} alt="Logo de Ecommerce" />
        </div>

        <nav>
            <ul className="nav__links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        <CartWidget />
    </div>
  )
}

export default NavBar