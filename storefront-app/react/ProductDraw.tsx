import React from 'react'
// import { useLazyQuery } from 'react-apollo'
// import { Link } from 'vtex.render-runtime'
// import { Image } from 'vtex.store-image'
//import { useQuery } from 'react-apollo'
//import helloworld from './graphql/helloworld.gql'
import ProductSimilarsComponent from './components/ProductSimilars'
// import GET_PRODUCT from './graphql/getProduct.graphql'

const ProductDraw = (/** { productIds } */) => {
  // const [getProduct, { data, loading, called }] = useLazyQuery(GET_PRODUCT)

  return (
    <div className="flex flex-column items-center ma3">
      <div>
           <ProductSimilarsComponent/>
      </div>
     
    </div>
  )
}

//ProductDraw.schema = {
  //title: 'My component',
  //type: 'object',
  //properties: {},
//}

export default ProductDraw