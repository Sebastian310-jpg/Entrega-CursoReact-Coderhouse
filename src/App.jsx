import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'

import './styles/App.scss'

function App() {
  return (
    <BrowserRouter>
        <CartProvider>
            <div className="app-container">
                <NavBar />

                <Routes>
                    <Route path="/" element={ <ItemListContainer /> } />
                    <Route path="/category/:productsCategory" element={ <ItemListContainer /> } />
                    <Route path="/detail/:productId" element={ <ItemDetailContainer /> } />
                    <Route path="/cart" element={ <CartContainer /> } />
                    <Route path="*" element={<h2>404 Not Found</h2>} />
                </Routes>
            </div>
        </CartProvider>
    </BrowserRouter>
  )
}

export default App
