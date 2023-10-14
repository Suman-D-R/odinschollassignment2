import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AppContext from '../context/AppContext/AppContext';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProductPage() {

  let {id} = useParams();
  const url = 'https://fakestoreapi.com/products/';
  let [product,setProduct] = useState([]);
  let [loding,setLoding] = useState(true);
  let {AddProduct} = useContext(AppContext);
  const appContext = useContext(AppContext);

  async function getProductData() {
    let responce = await fetch(url+id);
    let data = await responce.json();
    setProduct(data);
    setLoding(false);
  }

  useEffect(()=>{
    getProductData();
  },[])


  return (
    
    <div className='flex max-w-7xl'>
      {
        loding? <div className='flex items-center justify-center w-full h-screen'><CircularProgress /></div> :
        <>
      <div className='w-1/2 relative'>
      <div className="relative  ">
        <img src={product.image} className='max-h-40 max-w-40 m-20'></img>
        </div>
        <div className=' absolute top-12 right-12 p-4 cursor-pointer'  >
          
        <div >
          {
          appContext.wishList.find((e)=>{
            return e.id === product.id;
          })
          ? (
            <svg
              onClick={()=>{appContext.DeleteFromWishList(product)}}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            <svg
              onClick={()=>{appContext.AddToWishList(product)}}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            
          )}
        </div>
          
        </div>
      </div>
      <div className='w-1/2 mt-12'>
        <h1 className='text-3xl'>{product.title}</h1>
        <p className='my-12'>{product.description}</p>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-bold'>$ {product.price}</p>
          <span className='capitalize text-white bg-purple-400 p-2 rounded-lg'>{product.category}</span>
        </div>
        <div className='flex justify-between mt-4 items-center'>
          <h3>Rating: {product.rating.rate} - no: {product.rating.count}</h3> 
          <button className='bg-purple-600 text-white px-4 py-2 rounded-sm' onClick={()=>{AddProduct(product)}}>Add To Cart</button>
          {console.log(AddProduct)}
        </div>
      </div>
      </>
}
    </div>
    
  )
}
