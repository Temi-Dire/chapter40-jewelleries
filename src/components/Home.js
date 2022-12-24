import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="bg-red-100 w-full">
        <div className="py-44 text-center">The perfect christmas gift</div>
      </div>
      <div className="my-20 flex items-center justify-center">
        <div className="w-max border-solid border-2 border-sky-500 py-[17px] px-[21px]">
          VIEW OUR COLLECTIONS
        </div>
      </div>
      <div className="flex justify-between mx-12">
        <Product
          src={"./Images/cross.jpg"}
          desc={"Cross-Shaped necklace"}
          price={"$10"}
        />
        <Product
          src={"./Images/cross.jpg"}
          desc={"Cross-Shaped necklace"}
          price={"$10"}
        />
        <Product
          src={"./Images/cross.jpg"}
          desc={"Cross-Shaped necklace"}
          price={"$10"}
        />
        <Product
          src={"./Images/cross.jpg"}
          desc={"Cross-Shaped necklace"}
          price={"$10"}
        />
      </div>
    </div>
  );
}

export default Home;
