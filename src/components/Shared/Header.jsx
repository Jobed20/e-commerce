import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './header.css'

const Header = () => {

  const navbar = useRef()

  const clickMenuHam = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'>E-commerce</Link>
      </h1>
      <div onClick={clickMenuHam} className="ham">
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink 
                to='/login' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
             <i className="fa-solid fa-user-large"></i>
              <p className="navbar__label">Login</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/purchases' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-shop"></i>
              <p className="navbar__label">Purchases</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/cart' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-cart-plus"></i>
              <p className="navbar__label">Cart</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
