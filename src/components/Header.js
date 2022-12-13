import React, { useState } from "react";
import Accessories from "./Accessories";

function Header() {
  //To change burger class
  const [menu_class, setMenuClass] = useState("hidden");
  const [nav_bar, setNavBar] = useState("");

  function updateMenu() {
    setMenuClass("block");
    setNavBar("hidden");
  }
  function closeMenu() {
    setMenuClass("hidden ");
    setNavBar("block");
  }

  return (
    <div>
      <div
        className={`flex justify-between mt-[50px] mx-[45px] text-white ${nav_bar}`}
      >
        <div className="inline font-['Aclonica'] text-4xl">
          <h1>CHAPTER40 </h1>
          <h1>JEWELLERIES</h1>
        </div>
        <div className="sm:hidden">
          <Accessories />
        </div>
        <div className="inline flex items-center sm:hidden">
          <h2 className="mr-8 text-2xl font-['Rubik']">SIGN IN</h2>
          <img
            className="inline"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png"
            alt="cart icon"
          />
        </div>
        <div
          class="fa-solid fa-bars self-center md:hidden"
          onClick={updateMenu}
        ></div>
      </div>

      <div className={`relative ${menu_class}`}>
        <div className="w-1/2 h-screen bg-[#5D5B5B] text-white absolute top-o right-0 py-6 flex flex-col items-center justify-between">
          <h3>Necklaces</h3>
          <h3>Earrings</h3>
          <h3>Rings</h3>
          <h3>Wrist-watch</h3>
          <h3>Sign In</h3>

          <img
            className="inline"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png"
            alt="cart icon"
          />
        </div>
        <div
          class="fa-solid fa-xmark absolute top- 0 right-0 text-white pt-4 pr-4"
          onClick={closeMenu}
        ></div>
      </div>
    </div>
  );
}

export default Header;
