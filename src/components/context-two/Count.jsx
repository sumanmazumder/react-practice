import { useContext } from "react"
import { CountContext } from "./CreateContext"
const Count = () => {
    const { count, incCount, decCount } = useContext(CountContext);
    return(
        <>
            <p>Count: { count }</p>
            <button onClick={incCount}>+</button>
            <button onClick={decCount}>-</button>
        </>
    )
}
export default Count