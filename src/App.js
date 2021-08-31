import "./App.css";
//import Header from "./components/Header/Header";
import Products from "./components/Products";
import React, { useState, useEffect } from "react";
import SelectCategory from "./components/Header/selectCategory";

const groupBy = (xs, key) =>
  xs.reduce((rv, x) => {
    rv[x[key]] = true || [];
    return rv;
  }, {});

function App() {
  const [initialProducts, setInitialProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("effect");
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setInitialProducts(json);
      });
  }, []);

  let categories = [];

  const onChange = (category) => {
    if (category === "All") {
      setProducts(initialProducts);
    } else {
      setProducts(
        initialProducts.filter((product) => product.category === category)
      );
    }
  };

  categories = Object.keys(groupBy(initialProducts, "category"));
  categories.unshift("All");

  return (
    <div>
      <SelectCategory categories={categories} onChange={onChange} />
      <Products products={products} />
    </div>
  );
}

export default App;
