import { memo } from "react"

const IconButton = ({...props})=> {
    console.log("Button");
    return(<button {...props}></button>)
}

export default memo(IconButton)