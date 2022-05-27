import { useState } from 'react';
import { useEffect } from 'react';
import productData from '../api/products.json';
import ProductItem from '../components/ProductItem'

export default function Favorites() {

  const [product , setProduct] = useState([]);

  useEffect(() => {
   setProduct(productData);
  }, [])
  
  return (
    <div className=" py-8">
    <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
    <div className="grid grid-cols-8 gap-1 bg-white rounded-lg overflow-hidden" >
      {product.length && product.map((product , index) => 
      <ProductItem key={product.id} product={product} />
      )}
    </div>
    </div>
    </div>

  );
}
