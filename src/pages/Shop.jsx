import products from "../data/Products";
import ProductCard from "../components/ProductCard";
import { useSearch } from "../context/SearchContext";
import "./Shop.css";

export default function Shop() {
  const { search } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="shop">
      <h1>All Products</h1>

      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          No products found.
        </p>
      ) : (
        <div className="shop-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}