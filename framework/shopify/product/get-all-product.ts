import { headers } from "next/dist/client/components/headers"

const fetchApi = async () => {
    const url ="https://jsonplaceholder.typicode.com/posts"

   const res = await fetch(url, {
        method:"GET",
        headers:{
            "Content-type": "application/json"
        }
    })

    const data = await res.json()
    return {data}
}


const getAllProducts=async(): Promise<any[]> => {
    const products = await fetchApi()
    return products.data
}

export default getAllProducts