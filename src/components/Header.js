import React from 'react'
import logo from "../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <header>
        <div className="navbar">
          <Link to="/rahul/" className='navbarLogo' title="Home Page">
            <img src={logo} alt="logo" />
          </Link>
          <div className="rside">
            <div className="cartbox">
              <Link to="/checkout" style={{display:"flex", alignItems:"center"}} title="Go to Cart">
                <FaShoppingCart className='cart' />
                <span>{props.cartItem.length ? props.cartItem.length : ""}</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header