import React from "react";
function Header() {
  return (
    <header className="c-header">
      <a href="/" className="logo">
        Destineer
      </a>
      <ul className="c-header-list">
        <li>
          <a href="/">Explore</a>
        </li>
        <li>
          <a href="/">Things To Do</a>
        </li>
        <li>
          <a href="/">Plan Your Trip</a>
        </li>
        <li>
          <a href="/">Book Your Trip</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
