import './Offer.css';

export default function index() {
  return (
    <section className="offer section">
      <div className="offer__container grid">
        <div className="offer__data">
          <h3 className="offer__title">50% OFF</h3>
          <p className="offer__description">In Adidas Superstar sneakers</p>
          <a href="#" className="button">
            Shop Now
          </a>
        </div>

        <img src="/img/offert.png" alt="" className="offer__img" />
      </div>
    </section>
  );
}
