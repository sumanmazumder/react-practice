import { useState } from "react";
import CountContext from "./CreateContext";
import Count from "./Count";

const Context = ()=>{
    const [count, setCount] = useState(0);

    const incCount = ()=> {
        setCount(count + 1)
    }
    const decCount = ()=> {
        setCount(count - 1)
    }
    return(
        <>
            <h2>Context</h2>
            <CountContext.Provider value={count}>
                <button onClick={incCount}>+</button>
                <Count />
                <button onClick={decCount}>-</button>
            </CountContext.Provider>
        </>
    )
}

export default Context