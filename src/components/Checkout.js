import React from "react";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="md:flex p-[20px]">
      <div className="checkout__left w-full mr-4 border-2 border-solid border-[grey] mb-2 md:mb-0">
        This is a checkout page
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
