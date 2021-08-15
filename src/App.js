import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import React, { useState,useEffect } from "react";

const groupBy = (xs, key) => xs.reduce((rv, x) => {
  (rv[x[key]] = true || []);
  return rv;
}, {});

function App() {

 
  const [initialProducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState([]);


  let categories = [];

  const onChange = (category) => {
    if (category === 'All'){
        setProducts(initialProducts);
    }
    else{
        setProducts(initialProducts.filter((product) => product.category === category));
    }
  }
  useEffect (() => {
    
    console.log('effect')
    fetch("https://fakestoreapi.com/products")
    .then((res) => 
      res.json()
    )
    .then((json) => {
      setProducts(json)
      setInitialProducts(json);

    })
  }, [])
 
  categories = Object.keys(groupBy(initialProducts, 'category'));
  categories.unshift('All');

  return (
      <div>
         
          <Header categories={categories} onChange={onChange}/>
          <Products products={products}/>

      </div>
  );
}

export default App;
