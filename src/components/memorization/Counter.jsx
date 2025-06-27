import { useCallback, useState } from "react"
import CounterOutput from "./CounterOutput"
import IconButton from "./IconButton";


const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incrementBtn = useCallback(()=>{
        setCounter((prev)=> prev + 1);
    }, []);
    const decrementtBtn = useCallback(()=> {
        setCounter((prev)=> prev - 1);
    },[]);
    return(
        <>
            <h2>Memorization</h2>
            <div style={{display: "flex", alignItems: "center", gap: "4"}}>
                <IconButton onClick={incrementBtn}>+</IconButton>
                <CounterOutput counter={counter}  />
                <IconButton onClick={decrementtBtn}>-</IconButton>
            </div>
        </>
    )
}

export default Counter