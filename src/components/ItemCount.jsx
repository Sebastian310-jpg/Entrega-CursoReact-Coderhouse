import "../styles/ItemCount.scss"
import { useState } from "react"
import { RiResetLeftLine } from "react-icons/ri"


const ItemCount = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => count > 0 && setCount(count - 1)

    const reset = () => setCount(0);

  return (
    <div className="item-count">
        <button onClick={increment}>+</button>
        <h2 className="item-count__number">{count}</h2>
        <button onClick={decrement}>-</button>
        <button onClick={reset} className="item-count__btn-reset"><RiResetLeftLine /></button>
    </div>
  )
}

export default ItemCount