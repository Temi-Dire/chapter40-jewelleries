import React from "react";
//eslint-disable-next-line
function Product({ image, alt, desc, price, ratings }) {
  return (
    <div className="w-full ">
      {/* <div className="w-[200px] md:w-[250px]"> */}

      <div className="w-full h-[200px] bg-red-500 rounded-t-lg"></div>
      {/* <img
          src={image}
          alt={alt}
          className="w-full max-w-[250px] h-[200px] md:h-[250px] rounded-t-lg"
        /> */}
      <div className="border-solid border-2 border-t-0 border-grey rounded-b-lg p-2">
        <p>{desc}</p>
        <p>{price}</p>
        {/* <div className="flex flex-row">
          {Array(ratings)
            .fill()
            .map((noOfRatings, index) => (
              <p>⭐</p>
            ))}
        </div> */}
        <button className="bg-red-50 rounded p-2 w-full mt-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
