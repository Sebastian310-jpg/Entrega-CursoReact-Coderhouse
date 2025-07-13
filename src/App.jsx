import './styles/App.scss'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="app-container">
            <NavBar />

            <h2 className="title">Bienvenidos a mi Ecommerce</h2>
            <Routes>
                <Route path="/" element={ <ItemListContainer /> } />
                <Route path="/category/:productsCategory" element={ <ItemListContainer /> } />
                <Route path="/detail/:productId" element={ <ItemDetailContainer />} />
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>

        </div>
    </BrowserRouter>
  )
}

export default App
