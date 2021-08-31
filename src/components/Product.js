//import App from "../App";
import "./Product.css";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));



const Product = ({ image, title, price, description, category }) => {
  const classes = useStyles();
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={image} />{" "}
      </div>

      <div className="product-info">
        <h5>{title}</h5>
        <h4>price: {price} $</h4>
        <h6>{category}</h6>
        {/* <h3> {description}</h3> */}
        <div className={classes.root}>
          <Grid>
            <Typography variant="body2" style={{ cursor: "pointer" }}>
              <IconButton color="secondary" aria-label="add an alarm">
                <FavoriteIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />{" "}
              </IconButton>
            </Typography>{" "}
          </Grid>{" "}
        </div>
      </div>
    </div>
  );
};

export default Product;
