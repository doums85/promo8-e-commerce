import './Footer.css';

export default function index() {
  return (
    <footer className="footer section">
      <div className="footer__container grid">
        <div className="footer__box">
          <h3 className="footer__title">Sneaker Vogue</h3>
          <p className="footer__description">New collection of shoes 2022.</p>
        </div>

        <div className="footer__box">
          <h3 className="footer__title">EXPLORE</h3>
          <ul>
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#featured" className="footer__link">
                Featured
              </a>
            </li>
            <li>
              <a href="#women" className="footer__link">
                Women
              </a>
            </li>
            <li>
              <a href="#new" className="footer__link">
                New
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <h3 className="footer__title">SUPPORT</h3>
          <ul>
            <li>
              <a href="#" className="footer__link">
                Product Help
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Customer Care
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Athorized service
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <a href="#" className="footer__social">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="footer__social">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="footer__social">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="footer__social">
            <i className="bx bxl-google"></i>
          </a>
        </div>
      </div>
      <p className="footer__copy">
        &#169; 2022 Sneaker Vogue. All right reserved
      </p>
    </footer>
  );
}
