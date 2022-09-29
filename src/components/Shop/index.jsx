import React from 'react';

export default function index({ title }) {
  return (
    <section className="featured section" id="shop">
      <h2 className="section-title">{title} </h2>

      {/* FILTER PRODUCT HERE 👇 */}

      <div className="featured__container grid">
        <article className="sneaker">
          <img src="/img/featured1.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Jordan</span>
          <span className="sneaker__preci">$149.99</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/featured2.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Jordan</span>
          <span className="sneaker__preci">$149.99</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/featured3.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Jordan</span>
          <span className="sneaker__preci">$149.99</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/new2.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Sply</span>
          <span className="sneaker__preci">$79.96</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/new3.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Sply</span>
          <span className="sneaker__preci">$79.96</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/new4.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Sply</span>
          <span className="sneaker__preci">$79.96</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/new5.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Sply</span>
          <span className="sneaker__preci">$79.96</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/women1.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Womens</span>
          <span className="sneaker__preci">$129.99</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/women2.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Womens</span>
          <span className="sneaker__preci">$129.99</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/women3.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Womens</span>
          <span className="sneaker__preci">$129.99</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>

        <article className="sneaker">
          <img src="/img/women4.png" alt="" className="sneaker__img" />
          <span className="sneaker__name">Nike Womens</span>
          <span className="sneaker__preci">$129.99</span>
          <a href="#" className="button-light sneaker__button">
            Add to Cart <i className="bx bx-right-arrow-alt button-icon"></i>
          </a>
        </article>
      </div>

      <div className="sneaker__pages bd-grid">
        <div>
          <span className="sneaker__pag">1</span>
          <span className="sneaker__pag">2</span>
          <span className="sneaker__pag">3</span>
          <span className="sneaker__pag">4</span>
          <span className="sneaker__pag">&#8594;</span>
        </div>
      </div>
    </section>
  );
}
