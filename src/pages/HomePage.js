import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import CircularProgress from '@mui/material/CircularProgress';

export default function HomePage() {

    const apiUrl = "https://fakestoreapi.com/products"
    let [products,setProducts] = useState([]);
    let [loding,setLoding] = useState(true);

    async function getAllProducts(){
        let response = await fetch(apiUrl);
        let data = await response.json();
        setProducts(data);
        setLoding(false);
    }

    useEffect(()=>{
        getAllProducts()
    },[])

  return (
    <>
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
   </>
  )
}
