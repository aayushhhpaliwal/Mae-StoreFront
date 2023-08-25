import { useEffect } from "react"
// import check from "@/maestore";
import check from "maestore";
// import getAllProducts from "@/framework/shopify/product/get-all-product";
import getAllProducts from "@framework/product/get-all-product";
import type { GetStaticProps, InferGetStaticPropsType } from "next"

export async function getStaticProps() {
    const products = await getAllProducts()
    return{
      props : {
        products
      },
      revalidate: 4*60*60
    }
}

export default function Home( {
      products
    }:InferGetStaticPropsType<typeof getStaticProps>) {

  return(
    <div>
      {JSON.stringify(products) }

      
    </div>
  )
}

