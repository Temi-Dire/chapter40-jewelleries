import React from "react";

function CheckoutProduct({ image, id, desc, price, ratings }) {
  return (
    <div className="flex">
      {/* <img src="" alt="" /> */}
      <div className="w-[200px] h-[200px] bg-red-500 mr-8"></div>
      <div>
        <p>Gold earrings with free ring</p>
        <p>$120</p>
        <p>REMOVE FROM BASKET</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
