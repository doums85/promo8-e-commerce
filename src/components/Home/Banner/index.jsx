import './Banner.css';

export default function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner__container grid">
        <div className="banner__sneaker">
          <div className="banner__shape"></div>
          <img src="/img/imghome.png" alt="" className="banner__img" />
        </div>

        <div className="banner__data">
          <span className="banner__new">New in</span>
          <h1 className="banner__title">
            YEEZY BOOST <br /> SPLY - 350
          </h1>
          <p className="banner__description">
            Explore the new collections of sneakers
          </p>

          <a href="#new" className="button">
            Explore now
          </a>
        </div>
      </div>
    </section>
  );
}
