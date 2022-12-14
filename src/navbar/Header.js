import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="Header">
        <div className="hamburger-menu">
          <h2 className="H2MYMiniApp">
            <Link to="/" className="l-header">
              MY Mini App
            </Link>
          </h2>
          <input id="menu_toggle" type="checkbox" />
          <label htmlFor="menu_toggle" className="menu_btn">
            <span></span>
          </label>
          <ul className="menu_box">
            <Link to="/" target="_parent">
              <li className="menu_item">Home</li>
            </Link>
            <Link to="/Admin" target="_parent">
              <li className="menu_item">Admin</li>
            </Link>
            <Link to="/TodoList" target="_parent">
              <li className="menu_item">Todo List</li>
            </Link>
            <Link to="/Calculator" target="_parent">
              <li className="menu_item">Calculator</li>
            </Link>
            <Link to="/Api" target="_blank">
              <li className="menu_item">Movie APP</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
