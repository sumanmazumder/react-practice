import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from "./CountReducer";

const CountRedux = ()=> {
    const countState = useSelector((state)=> state.count.value);
    const dispatch = useDispatch();
    console.log(countState)
    return (
        <>
            <h2>Redux</h2>
            <p>countState: {countState}</p>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </>
    )
}

export default CountRedux