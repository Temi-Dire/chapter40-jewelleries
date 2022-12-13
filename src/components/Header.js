import React from "react";
import Accessories from "./Accessories";

function Header() {
  // const [change, setChange] = useState(<Accessories />);
  return (
    <div className="flex justify-between mt-[65] text-white">
      <div className="inline font-['Aclonica'] text-4xl">
        <h1>CHAPTER40 </h1>
        <h1>JEWELLERIES</h1>
      </div>
      <Accessories />
      <div class="fa-solid fa-bars self-center"></div>
      <div className="inline flex items-center sm:hidden">
        <h2 className="mr-8 text-2xl font-['Rubik']">SIGN IN</h2>
        <img
          className="inline"
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png"
          alt="cart icon"
        />
      </div>
    </div>
  );
}

export default Header;
