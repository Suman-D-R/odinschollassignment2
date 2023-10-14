import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import CircularProgress from '@mui/material/CircularProgress';

export default function CategoryPage() {

  let {id} = useParams();
  const url =  "https://fakestoreapi.com/products/category/"
  let [products,setProduct] = useState([]);
  let [loding,setLoding] = useState(true);

  async function getProductsForCategory(){
    let response = await fetch(url+id);
    let data = await response.json();
    setProduct(data);
    setLoding(false);
  }

  useEffect(()=>{
    getProductsForCategory();
  },[id])
  
  return (
    <div className=' max-w-7xl mx-auto flex flex-wrap justify-between'>
     {loding ? <div className='flex items-center justify-center w-full h-screen'><CircularProgress /></div>:(
        products.map((product)=>{
            return(
                <ProductCard product={product} />
            )
        }
        ))
        
    }
   </div>
  )
}
