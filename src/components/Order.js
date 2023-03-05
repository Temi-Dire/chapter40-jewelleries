import React from "react";

function Order({ id, desc, price }) {
  return (
    <div className="flex p-4 my-4 border border-solid border-[#334] rounded w-1/2">
      {/* <img src="" alt="" /> */}
      <div className="w-[100px] h-[100px] bg-red-500 mr-8 "></div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <p>{desc}</p>
          <p className="text-lg">{"₦" + price}</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
