import { useEffect, useState } from "react";
import AppContext from "./AppContext";
import toast from "react-hot-toast";

export default function AppState({ children }) {
  let name = "Home";
  let [cartItems, setCartItems] = useState([]);
  let [wishList, setWishList] = useState([]);
  const [amount, setAmount] = useState([]);

  function AddProduct(product) {
    setCartItems([...cartItems, product]);
    toast.success("Add to cart");
  }

  function DeleteProductFromCart(product) {
    let updateCart = cartItems.filter((item) => {
      return item.id != product.id;
    });
    setCartItems(updateCart);
    toast.success("Deleted");
  }

  function AddToWishList(product) {
    setWishList([...wishList, product]);
  }

  function DeleteFromWishList(product) {
    let updateWishList = wishList.filter((item) => {
      return item.id !== product.id;
    });

    setWishList(updateWishList);
  }

  useEffect(() => {
    let totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
    setAmount(totalAmount);
  }, [cartItems]);

  return (
    <AppContext.Provider
      value={{
        DeleteFromWishList,
        name,
        AddProduct,
        cartItems,
        DeleteProductFromCart,
        amount,
        wishList,
        AddToWishList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
