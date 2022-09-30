import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import './Header.css';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleHandler = () => {
    if (showCart) setShowCart(false);
    setToggle(!toggle);
  };

  function showCartHandler() {
    if (toggle) setToggle(false);
    setShowCart(!showCart);
  }
  return (
    <header className="header" id="header">
      <nav className="nav grid">
        <div onClick={toggleHandler} className="nav__toggle" id="nav-toggle">
          <i className="bx bxs-grid"></i>
        </div>

        <Link to="/" className="nav__logo">
          Sneaker Vogue
        </Link>

        <div
          className={`${toggle ? 'nav__menu show' : 'nav__menu'} `}
          id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Men
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Women
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                New
              </a>
            </li>
            <li className="nav__item">
              <a href="./shop.html" className="nav__link">
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__shop">
          <Link to="/user/login">
            <i className="bx bx-user"></i>
          </Link>
          <i onClick={showCartHandler} className="bx bx-shopping-bag"></i>
        </div>

        <Cart {...{ showCart, showCartHandler }} />
      </nav>
    </header>
  );
}
