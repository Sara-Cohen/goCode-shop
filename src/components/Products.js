import Product from "./Product";
import './Products.css';
const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map((product) => (
        <Product
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
      ))}
    </section>
  );
};

export default Products;
