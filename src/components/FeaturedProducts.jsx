import products from "../data/Products";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  return (
    <section className="featured">
      <h2>Best Sellers</h2>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}