import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Product from "./components/Product";
import axios from 'axios';
import { useEffect, useState } from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";

function App() {
  const [res, setRes] = useState([])
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((response) => {
        // console.log(response.data);
        setRes(response.data);
      })
  }, []);

  const addtocart = (id) => {
        let data = res.find((ele) => {
            return ele.id === id;
        })
        let key = new Date().getTime().toString();
        setCartItem([...cartItem,{data,key}]);
        console.log(id);
    }

    const removefromcart = (id) => {
      let data = cartItem.filter((ele) => {
          return ele.key !== id;
      })
      setCartItem(data);
      console.log(`Deleted item no ${id}`)
  }

  return (
    <>
      <BrowserRouter>
        <Header cartItem={cartItem}/>
        <Routes>
          <Route path="/rahul/" element={<Product res={res} addtocart={addtocart}/>}/>
          <Route path="/checkout" element={<Checkout cartItem={cartItem} removefromcart={removefromcart}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
