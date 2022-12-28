import React from "react";

function Product({ image, alt, desc, price, ratings }) {
  return (
    <div>
      <div className="w-[250px] ">
        <img
          src={image}
          alt={alt}
          className="w-full max-w-[250px]b h-[250px] rounded-t-lg"
        />
        <div className="border-solid border-2 border-t-0 border-grey rounded-b-lg p-2">
          <p>{desc}</p>
          <p>{price}</p>
          <div className="flex flex-row">
            {Array(ratings)
              .fill()
              .map((noOfRatings, index) => (
                <p>⭐</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
