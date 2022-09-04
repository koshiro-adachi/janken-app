import React, { useRef, useState } from "react";
import "./hamburgerMenu.css";

export const HamburgerMenu = () => {
  return (
    <>
      <div className="hamburger">
        <input type="checkbox" id="menu-btn-check" />
        <label htmlFor="menu-btn-check" className="menu-btn">
          <span></span>
        </label>
      </div>
    </>
  );
};
