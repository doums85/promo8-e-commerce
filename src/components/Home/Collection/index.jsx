import './Collection.css';

export default function index() {
  return (
    <section className="collection section">
      <div className="collection__container grid">
        <div className="collection__card">
          <div className="collection__data">
            <h3 className="collection__name">Nike</h3>
            <p className="collection__description">New collection 2022</p>
            <a href="" className="button-light">
              Buy now <i className="bx bx-right-arrow-alt button-icon"></i>
            </a>
          </div>

          <img src="/img/collection1.png" alt="" className="collection__img" />
        </div>

        <div className="collection__card">
          <div className="collection__data">
            <h3 className="collection__name">Addidas</h3>
            <p className="collection__description">New collection 2022</p>
            <a href="" className="button-light">
              Buy now <i className="bx bx-right-arrow-alt button-icon"></i>
            </a>
          </div>

          <img src="/img/collection2.png" alt="" className="collection__img" />
        </div>
      </div>
    </section>
  );
}
