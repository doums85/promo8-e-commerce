import './WomenSection.css';

export default function index() {
  return (
    <section className="women section" id="women">
      <h2 className="section-title">WOMEN SNEAKERS</h2>

      <div className="women__container grid">
        <article className="sneaker">
          <img src="/img/women1.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Free TR</span>
          <span className="sneaker__preci">$129.90</span>
          <a href="#" className="button-light">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/women2.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Flyknit</span>
          <span className="sneaker__preci">$129.90</span>
          <a href="#" className="button-light">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/women3.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike GS Pink</span>
          <span className="sneaker__preci">$129.90</span>
          <a href="#" className="button-light">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/women4.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Get 5</span>
          <span className="sneaker__preci">$129.90</span>
          <a href="#" className="button-light">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>
      </div>
    </section>
  );
}
