import { useContext } from "react";
import CountContext from "./CreateContext";

const Count = ()=> {
    const count = useContext(CountContext)
    return(
        <>
            <p>Count: { count }</p>
        </>
    )

}
export default Count;