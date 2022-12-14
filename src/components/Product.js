import React from "react";
import { useStateValue } from "../StateProvider";
//eslint-disable-next-line
function Product({ image, id, desc, price, ratings }) {
  //eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        desc: desc,
        price: price,
      },
    });
  }

  return (
    <div className="w-full ">
      {/* <div className="w-[200px] md:w-[250px]"> */}

      <div className="w-full h-[200px] bg-red-500 rounded-t-lg"></div>
      {/* <img
          src={image}
          alt="Product"
          className="w-full max-w-[250px] h-[200px] md:h-[250px] rounded-t-lg"
        /> */}
      <div className="border-solid border-2 border-t-0 border-grey rounded-b-lg p-2">
        <p>{desc}</p>
        <p>{"₦" + price}</p>
        {/* <div className="flex flex-row">
          {Array(ratings)
            .fill()
            .map((noOfRatings, index) => (
              <p>⭐</p>
            ))}
        </div> */}
        <button
          className="bg-red-50 rounded p-2 w-full mt-2"
          onClick={addToBasket}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
