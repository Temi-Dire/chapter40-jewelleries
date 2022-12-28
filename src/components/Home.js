import React from "react";
import Hero from "./Hero";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div>
        <Hero class={"bg-red-100"} desc={"The Perfect Christmas Gift"} />
      </div>
      <div className="mt-20 flex items-center justify-center">
        <div className="w-max border-solid border-2 border-sky-500 py-[17px] px-[21px]">
          VIEW OUR COLLECTIONS
        </div>
      </div>

      {/* NECKLACES */}
      <div className="flex justify-center mt-24 mb-2">NECKLACES</div>
      <div className="flex justify-between mx-12">
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={4}
        />
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={3}
        />
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={1}
        />
      </div>

      <Hero class={"bg-red-100"} desc={"We sell only quality products"} />

      {/* EARRINGS */}
      <div className="flex justify-center mt-24 mb-2">EARRINGS</div>
      <div className="flex justify-between mx-12">
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={4}
        />
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={3}
        />
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={1}
        />
      </div>

      <Hero class={"bg-red-100"} desc={"CHAPTER 40 Jewelleries"} />

      {/* RINGS */}
      <div className="flex justify-center mt-24 mb-2">RINGS</div>
      <div className="flex justify-between mx-12">
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={4}
        />
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={3}
        />
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={1}
        />
      </div>

      <Hero
        class={"bg-red-100"}
        desc={"Purchase now and receive it instantly"}
      />

      {/* WRIST-WATCHES */}
      <div className="flex justify-center mt-24 mb-2">WRIST-WATCHES</div>
      <div className="flex justify-between mx-12">
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={4}
        />
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={3}
        />
        <Product
          image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price="$10"
          ratings={1}
        />
      </div>

      <div className="mt-20 flex items-center justify-center">
        <div className="w-max border-solid border-2 border-sky-500 py-[17px] px-[21px]">
          SEE WHAT OUR CUSTOMERS ARE SAYING
        </div>
      </div>

      <Hero class={"bg-red-100"} desc={"See what our customers are saying"} />

      {/* <div>
        <Hero class={"bg-sky-500"} desc={"SHOP HOME & DECOR"} />
      </div> */}
    </div>
  );
}

export default Home;
