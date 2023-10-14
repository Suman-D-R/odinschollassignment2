import { Fragment,  useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import AppContext from "../context/AppContext/AppContext";
import emptyCart from '../images/empty-cart.webp';
import ProductAddToCart from "./ProductAddToCart";


export default function CartComponent({ openCart, setOpenCart }) {
  let appContext = useContext(AppContext);
  return (
    <Transition.Root show={openCart} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpenCart(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Cart
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {
                        appContext.cartItems.length < 1?<div>
                          <img src={emptyCart} alt='emptyCart'/>
                          <p className="text-center font-bold text-gray-500 ">Empty Cart</p>
                        </div>: appContext.cartItems.map((product)=>{
                          return(<>
                          <ProductAddToCart product={product}></ProductAddToCart>
                          </>)
                        })
                      }
                      {
                      appContext.cartItems.length < 1?(""):
                      <div className="flex w border items-center border-transparent shadow-lg mr-4 ml-4 p-8 rounded-md justify-between hover:shadow-2xl hover:border hover:border-blue-50">
                        <span className="flex">
                        <p className="font-bold mr-2">Total Amount: </p>
                        <p className="font-bold">$ {appContext.amount}</p>
                        </span>
                        <button className="bg-purple-400 px-5 py-1 rounded-md text-white">buy</button>
                        </div>
                        
                        }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
