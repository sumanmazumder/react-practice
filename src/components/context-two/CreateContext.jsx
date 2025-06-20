import { createContext, useState } from "react"

export const CountContext = createContext();

const CreateContext = ({children})=>{
    const [count, setCount] = useState(0);

    const incCount = () => setCount(count + 1);
    const decCount = () => setCount(count - 1);
    return(
        <CountContext.Provider value={{count, incCount, decCount}}>
            {children}
        </CountContext.Provider>

    )
}

export default CreateContext