import { useState } from "react"

const useCustomHook = ()=>{
    const [count, setCount] = useState(0);
    
    const incrementCount = ()=> {
        setCount(count + 1);
    }
    const decrementCount = ()=> {
        setCount(count - 1);
    }

    return { count, incrementCount, decrementCount }
}

export default useCustomHook