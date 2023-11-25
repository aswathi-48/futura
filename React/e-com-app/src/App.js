import Nav from "./Components/Nav";
// import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Rout from "./Components/Rout";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Product from "./Components/Product";
import ProductDetails from "./Components/ProductDetails";
import { useState } from "react";



function App() {
  // const router=createBrowserRouter([
  //   {
  //     path:'nav',
  //     element:<Nav/>
  //   },
  //   {
  //     path:'rout',
  //     element:<Rout/>
  //   },
  //   {
  //     path:'home',
  //     element:<Home/>
  //   },
  //   {
  //     path:'footer',
  //     element:<Footer/>
  //   }
  // ])

//add to cart

 const [cart,setCart]=useState([])
//product details
const [close,setClose] =useState(false);
  const [detail,setDetail]=useState([])

  //filter Products
  const [product,setProduct]=useState(ProductDetails) 
  const searchbtn = (product) =>{
  const change=ProductDetails.filter((x)=>{
    return x.Cat ===product
  })
  setProduct(change)
 
}
//product details

const view = (product)=>
{
  setDetail ([{...product}])
  setClose(true)
}

//add to cart
const addtocart=(product)=>{

}
  return (


    <div className="App">
      <BrowserRouter>
        <Nav searchbtn={searchbtn}/>
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
        {/* <Home/> */}
        <Footer />
      </BrowserRouter>

      {/* <RouterProvider router={router}></RouterProvider> */}

    </div>
  );
}

export default App;
