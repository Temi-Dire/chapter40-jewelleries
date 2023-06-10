import React from "react";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, desc, price }) {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="flex p-4 my-4 border border-solid border-[#334] rounded">
      {/* <img src="" alt="" /> */}
      <div className="w-[100px] h-[100px] bg-red-500 mr-8 "></div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <p>{desc}</p>
          <p className="text-lg">{"₦" + price}</p>
        </div>
        <button
          className="bg-red-50 rounded p-2 w-[200px] mt-2 text-sm"
          onClick={removeFromBasket}
        >
          REMOVE FROM BASKET
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
