import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import WishListPage from "./pages/WishListPage";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import CartComponent from "./components/CartComponent";
import WishComponent from "./components/WishComponent";

export default function App() {
  let [openCart,setOpenCart] = useState(false);
  let [openWishList,setOpenList] = useState(false);

  return (
    <>
      <Toaster/>
      <Header setOpenCart={setOpenCart} setOpenList={setOpenList}></Header>
      <CartComponent openCart={openCart} setOpenCart={setOpenCart} ></CartComponent>
      <WishComponent setOpenList={setOpenList} openWishList={openWishList} ></WishComponent>
      <div className='pt-20 '>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='category/:id' element={<CategoryPage />}></Route>
          <Route path='product/:id' element={<ProductPage />}></Route>
          <Route path='wishlist' element={<WishListPage />}></Route>
          <Route path='cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
}
