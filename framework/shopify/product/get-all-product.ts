import { headers } from "next/dist/client/components/headers"
import getAllProductsQuery from "../utils/queries/get-all-produts"
import fetchApi from "../utils/fetch-api"



const getAllProducts=async(): Promise<any[]> => {
    const products = await fetchApi({query:getAllProductsQuery})
    return products.data
}

export default getAllProducts