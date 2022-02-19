import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      {/* <div id="loader">
            <div id="status"></div>
        </div> */}
      <div id="site-header">
        <header id="header" className="header-block-top">
          <div className="container">
            <div className="row">
              <div className="main-menu">
                <nav className="navbar navbar-default" id="mainNav">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#navbar"
                      aria-expanded="false"
                      aria-controls="navbar"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <div className="logo">
                      <a
                        className="navbar-brand js-scroll-trigger logo-header"
                        href="#h"
                      >
                        <img src="images/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li className="active">
                        <a href="#banner">Home</a>
                      </li>

                      <li>
                        <Link to="menu">Menu</Link>
                      </li>

                      <li>
                        <a href="#reservation">Reservaion</a>
                      </li>
                      <li>
                        <a href="#footer">Contact us</a>
                      </li>
                      <li>
                        <a href="#about">About us</a>
                      </li>
                      <li>
                        <Link to="login">Login</Link>
                      </li>
                      <li>
                        <Link to="register">Register</Link>
                      </li>

                      <li>
                        <Link to="cart">
                          <i
                            className="fa fa-shopping-basket"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
