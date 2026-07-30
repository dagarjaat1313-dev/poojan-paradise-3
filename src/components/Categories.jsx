import "./Categories.css";

const categories = [
  "Pooja Kits",
  "Dhoop",
  "Kapoor",
  "Ghee",
  "Rudraksh",
  "Hawan Samagri",
];

export default function Categories() {
  return (
    <section className="categories">
      <h2>Shop by Categories</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}