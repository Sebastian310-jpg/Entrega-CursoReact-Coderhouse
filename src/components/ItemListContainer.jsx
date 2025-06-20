import '../styles/ItemListContainer.scss'

const ItemListContainer = ({ emoji, nombre, precio }) => {
  return (
    <div className='item-container'>
        <span className='item__emoji'>{emoji}</span>
        <h3 className='item__nombre'>{nombre}</h3>
        <p className='item__precio'>${precio}</p>

        <button>Añadir al Carrito</button>
    </div>
  )
}

export default ItemListContainer