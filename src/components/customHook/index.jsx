import useCustomHook from "./useCustomHook"

const CustomHook = ()=>{
    const {count, incrementCount, decrementCount} = useCustomHook();

    console.log(count);
    return(
        <>
            <h2>Custom Hook</h2>
            <p>{count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>decrement</button>
        </>
    )
}

export default CustomHook