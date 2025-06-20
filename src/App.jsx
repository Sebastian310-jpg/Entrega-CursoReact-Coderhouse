import './styles/App.scss'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
        <NavBar />

        <div className="productos-contenedor">
            <ItemListContainer emoji='👟' nombre='Zapatilla' precio={40000} />
            <ItemListContainer emoji='⚽' nombre='Pelota de Futbol' precio={5000} />
            <ItemListContainer emoji='📱' nombre='Telefono' precio={1000000} />
            <ItemListContainer emoji='👗' nombre='Vestido' precio={95000} />
            <ItemListContainer emoji='🏐' nombre='Pelota de Voley' precio={3300} />
            <ItemListContainer emoji='🎮' nombre='Joystick' precio={25000} />
        </div>
    </>
  )
}

export default App
