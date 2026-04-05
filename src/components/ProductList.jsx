import ProductCard from "./ProductCard";
import products from "../data/products";
import "./ProductList.css";

function ProductList() {
  return (
    <div id="product-list" className="product-container">
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;