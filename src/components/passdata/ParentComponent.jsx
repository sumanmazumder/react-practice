import { useState } from "react"
import ChildComponent from "./ChildComponent"

const ParentComponent = ()=> {
    const [newData, setNewData] = useState([]);
    let obj = [
        {name: 'Suman', age: 25},
        {name: 'Suman 02', age: 5},
        {name: 'Suman 03', age: 30},
    ]
    const handleUpdatedData = (newData)=>{
        // console.log("Received from child:", newData);
        setNewData(newData)
    }
    return(
        <>
            <h2>Parent component</h2>
            <ChildComponent data={obj} onDataUpdate={handleUpdatedData}/>
            <ul>
                {newData?.length > 0 && newData.map((item, id)=>(
                    <li key={id}>{item?.age}</li>
                ))}
            </ul>
        </>
    )
}

export default ParentComponent;