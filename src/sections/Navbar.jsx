import logo from "../assets/images/Aloha.svg";
import { navItems } from "../consts";
import Button from "./components/Button";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/close.svg";
import { useState } from "react";
const Navbar = () => {
  const customStyle = {
    background: "#008080",
    color: "white",
  };
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    console.log("toggle");
    setShowMenu((prev) => !prev);
  };
  return (
    <nav>
      <div className="company-logo">
        <img src={logo} alt="company logo" />
      </div>
      <div className="desktop-nav">
        <ul>
          {navItems.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="book-a-trip">
          <Button customStyle={customStyle} text="Book a trip" />
        </div>
      </div>
      <div className={`mobile-nav ${showMenu ? 'open' : ''}`}>
        <div className="menu-icon" onClick={() => toggleMenu()}>
          <img src={menu} />
        </div>
        {showMenu && (
          <div className="dropdown">
            <div className="menu-items">
              <div onClick={toggleMenu} className="close-icon">
                <img  src={close} alt="close" />
              </div>
              <ul>
                {navItems.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
                <li>
                  <Button customStyle={customStyle} text="Book a trip" />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
