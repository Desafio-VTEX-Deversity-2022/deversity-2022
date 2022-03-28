import React from "react"
import { useQuery } from "react-apollo"
//import { useProduct } from 'vtex.product-context'
import GET_PRODUCTS from "../graphql/product.gql"


const ProductSimilars = () => {
 //   const productContext = useProduct() || null 

 const {loading, error, data } = useQuery(GET_PRODUCTS)


 if(loading || error ) return null 

    return (
        `Cashback de ${data}`
    )
}

export default ProductSimilars