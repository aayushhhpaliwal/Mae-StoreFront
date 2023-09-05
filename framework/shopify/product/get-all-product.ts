import { headers } from "next/dist/client/components/headers"
// import getAllProductsQuery from "../utils/queries/get-all-produts"
import {fetchApi, normalizeProduct , getAllProductsQuery} from "../utils"

// import { ProductConnection } from "@/framework/schema"
import { ProductConnection } from "framework/schema"
// import { normalizeProduct } from "../utils/normalize"
import { product } from "@common/types/product";


type ReturnType = {
    products : ProductConnection
} 
 
const getAllProducts  = async (): Promise<product[]> => {
    const{ data } = await fetchApi<ReturnType>({query: getAllProductsQuery})

    const products = data.products.edges.map(({node: product }) => 
    normalizeProduct(product)
    ) ??[]

    return products
}



export default getAllProducts