import { setCountData } from "./CountReducer";
import { RootState } from "./Store"
import { useDispatch, useSelector } from 'react-redux';

const CountRedux = ()=> {
    const countState = useSelector((state)=> state.count.countData);
    const dispatch = useDispatch();
    return (
        <>
             <p>Redux Count: {countState}</p>
             <button onClick={()=> dispatch(setCountData(countState + 1))}>Increment</button>
             <button onClick={()=> dispatch(setCountData(countState - 1))}>Increment</button>
        </>
    )
}

export default CountRedux