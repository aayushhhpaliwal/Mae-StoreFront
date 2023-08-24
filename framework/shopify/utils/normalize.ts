
import {ImageEdge, Product as ShopifyProduct } from "@/framework/schema";
// import {} from "@/framework/schema";
import { url } from "inspector"  
import { normalize } from "path";
import { product } from "@/framework/common/types/product";

const normalizeProductImages = ({edges}: {edges:Array<ImageEdge>}) => 
      edges.map(({node: { originalSrc:url, ...rest}})=> ({
            url:`/images/${url}`,
            ...rest}
     ))

export function normalizeProduct(productNode:ShopifyProduct): product {
    const {
        id,
        title: name, 
        handle, 
        vendor, 
        description, 
        images: imageConnection,
        ... rest
    }= productNode

    const product = {
        id, 
        name, 
        vendor, 
        description, 
        path:`/${handle}`,
        slug:handle.replace(/^\/+|\/+$/g, ""),
        images:normalizeProductImages(imageConnection),
        ...rest
    }

    return product
}

