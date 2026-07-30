import products from "../data/Products";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Shop.css";

export default function Shop() {
  return (
    <section className="shop">
      <h1>All Products</h1>

      <div className="shop-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}