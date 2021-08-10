//import App from "../App";

const Product = ({ image, title, price, description, category }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt=" " />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>price: {price} $</h6>
        <h5>
          {description}
          <br />
          {category}
        </h5>
      </div>
    </div>
  );
};

export default Product;
