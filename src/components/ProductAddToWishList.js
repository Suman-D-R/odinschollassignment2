import { useContext,useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext/AppContext";

export default function ProductAddToWishList({ product }) {
    const [add, setAdd] = useState(true);
    const appContext = useContext(AppContext);
  
    function handler(){
      setAdd(!add);
    }

  return (
    <div className="flex w border border-transparent shadow-lg mr-4 ml-4 p-8 rounded-md flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-50">
      <div className="flex items-center">
      <img src={product.image} className="max-h-14 max-w-14  mx-auto mr-4" />
      <Link to={`/product/${product.id}`}>
        <h3 className="mt-3">{product.title}</h3>
      </Link>
      </div>
      <div className="mt-4 flex justify-between">
        <p>$ {product.price}</p>
        <Link onClick={handler} to="">
          
            <svg
              onClick={()=>{appContext.DeleteFromWishList(product)}}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
        </Link>

      </div>
    </div>
  );
}
