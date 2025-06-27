import { useEffect } from "react";

const ChildComponent =({data, onDataUpdate})=> {
    // console.log(data);
    // let newObj = data.map((item)=> ({...item, age: item?.age *5}));
    let newObj = data.map((item)=> {
        return({...item, age: item?.age *5})
    });
    useEffect(()=> {
        onDataUpdate(newObj)
    },[data.length > 0]);
    return(
        <>
            <ul>
                {data.length >0 && data.map((item, index)=> (
                    <li key={index}>{item?.name}</li>
                ))}
            </ul>
        </>
    )
}

export default ChildComponent;