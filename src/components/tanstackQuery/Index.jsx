import { useQuery } from "@tanstack/react-query"
import BlogServices from "./Services"

const Index = ()=> {

    const {data, isLoading} = useQuery({
        queryKey: ["post"],
        queryFn: BlogServices.getBlogList(),
        refetchOnWindowFocus: false,
    })
    return(
        <></>
    )
}

export default Index