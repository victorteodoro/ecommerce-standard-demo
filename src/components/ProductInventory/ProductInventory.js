// General imports from libs
import React from "react";

// Import components
import ProductArea from "./ProductArea/ProductArea";
import Carousel from "./Carousel/Carousel";

const elements = [Carousel, ProductArea];

const ProductInventory = () => (
  <div>
    <Carousel />
    <ProductArea />
  </div>
);

export default ProductInventory;
