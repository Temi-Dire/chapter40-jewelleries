import React from "react";

function Menu() {
  return (
    <div className="relative">
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
      <div class="fa-solid fa-xmark absolute top- 0 right-0 text-white pt-4 pr-4"></div>
    </div>
  );
}

export default Menu;
