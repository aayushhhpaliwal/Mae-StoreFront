import { headers } from "next/dist/client/components/headers"
import getAllProductsQuery from "../utils/queries/get-all-produts"
import fetchApi from "../utils/fetch-api"
import { ProductConnection } from "@/framework/schema"

type ReturnType = {
    products : ProductConnection
} 

const getAllProducts=async(): Promise<any> => {
    const {data} = await fetchApi<ReturnType>({query:getAllProductsQuery})

    data.products.edges.map(({node: product}) => {
        return product
    }) ?? []
    // normalise and return new data !

    return data.products
}

export default getAllProducts