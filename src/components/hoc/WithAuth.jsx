import { Navigate } from "react-router-dom";

const WithAuth = (WrapperComponent) => {
    return function(props){
        const isLogin = localStorage.getItem("auth_token");
        if(!isLogin){
            return <Navigate to="/login" />
        }
        // console.log("Logged in");
        return <WrapperComponent {...props} />
    }
}
export default WithAuth;