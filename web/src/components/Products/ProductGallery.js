import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { useSearchParams } from 'react-router-dom';
import productsService from '../../services/products'


function ProductGallery() {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const query = {}
    const category = searchParams.get('category');
    
    if (category) query.category = category;

    productsService.list(query)
      .then((products) => setProducts(products))
      .catch(error => console.error(error))
  }, [searchParams]);
    



  return (
    <>
    <div className=' justify-center mx-4 my-4 grid grid-cols-4 gap-6'>
    {products.map((product) => (
      <ProductItem product= {product} key={product.id}/>
    ))}
    </div>
    </>
  )
}

export default ProductGallery