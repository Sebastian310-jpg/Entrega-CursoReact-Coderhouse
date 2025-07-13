import '../styles/NavBar.scss'
import logoEcommerce from '../assets/img/logo-ecommerce.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar-container">
        <Link to="/">
            <div className="nav__logo">
                <img src={logoEcommerce} alt="Logo de Ecommerce" />
            </div>
        </Link>

        <nav>
            <ul className="nav__links">
                <li><Link to="/category/ropa">Ropa</Link></li>
                <li><Link to="/category/electronica">Electrónica</Link></li>
                <li><Link to="/category/alimentos">Alimentos</Link></li>
                <li><Link to="/category/accesorios">Accesorios</Link></li>
                <li><Link to="/category/deportes">Deportes</Link></li>
                <li><Link to="/category/muebles">Muebles</Link></li>
            </ul>
        </nav>

        <CartWidget />
    </div>
  )
}

export default NavBar