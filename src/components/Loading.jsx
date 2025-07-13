import { FadeLoader } from "react-spinners"
import "../styles/Loading.scss"

const Loading = () => {
  return (
    <div className="loading">
        <FadeLoader color="#ccc" />
    </div>
  )
}

export default Loading
