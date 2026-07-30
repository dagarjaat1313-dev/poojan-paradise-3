import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h4>Welcome to</h4>
        <h1>Poojan Paradise</h1>
        <p>
          Premium Pooja Essentials for Every Occasion.
          Pure, Authentic & Delivered to Your Doorstep.
        </p>

        <button>Shop Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1605106702734-205df224ecce?w=900"
          alt="Pooja"
        />
      </div>
    </section>
  );
}