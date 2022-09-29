import './NewCollection.css';

export default function index() {
  return (
    <section className="new section" id="new">
      <h2 className="section-title">NEW COLLECTION</h2>

      <div className="new__container grid">
        <div className="new__mens">
          <img src="/img/new1.png" alt="" className="new__mens-img" />
          <h3 className="new__title">Mens Shoes</h3>
          <span className="new__preci">From $90</span>
          <a href="#" className="button-light">
            View Collection{' '}
            <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </div>

        <div className="new__sneaker">
          <div className="new__sneaker-card">
            <img src="/img/new2.png" alt="" className="new__sneaker-img" />
            <div className="new__sneaker-overlay">
              <a href="#" className="button">
                Add to Cart
              </a>
            </div>
          </div>

          <div className="new__sneaker-card">
            <img src="/img/new3.png" alt="" className="new__sneaker-img" />
            <div className="new__sneaker-overlay">
              <a href="#" className="button">
                Add to Cart
              </a>
            </div>
          </div>

          <div className="new__sneaker-card">
            <img src="/img/new4.png" alt="" className="new__sneaker-img" />
            <div className="new__sneaker-overlay">
              <a href="#" className="button">
                Add to Cart
              </a>
            </div>
          </div>

          <div className="new__sneaker-card">
            <img src="/img/new5.png" alt="" className="new__sneaker-img" />
            <div className="new__sneaker-overlay">
              <a href="#" className="button">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
