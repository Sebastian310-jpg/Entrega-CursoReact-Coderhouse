import { useState } from "react"
import { RiResetLeftLine } from "react-icons/ri"
import "../styles/ItemCount.scss"


const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickIncrement = () => count < stock && setCount(count + 1)
    const handleClickDecrement = () => count > 1 && setCount(count - 1)

    const handleClickReset = () => setCount(1)

  return (
    <div className="item-count__actions">
        <div className="item-count">
            <button onClick={handleClickIncrement}>+</button>
            <h2 className="item-count__number">{count}</h2>
            <button onClick={handleClickDecrement}>-</button>
            <button onClick={handleClickReset} className="item-count__btn-reset"><RiResetLeftLine /></button>

            <button className="item-count__add" onClick={ () => addProduct(count) }>Añadir al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount