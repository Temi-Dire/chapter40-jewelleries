import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Footer from "../components/footer";
// import handImage from "../images/chain.png";
// import "./login.css"

function Home() {
  return (
    <div className="bg-white text-[#264143]">
      <Header />
      <div>
        <Hero class={"bg-primary"} desc={"WELCOME TO CHAPTER40 JEWELLERY"} />
      </div>
      <div className="my-20 flex items-center justify-center">
        <div className="w-max border-solid border-2 border-primary py-[17px] px-[21px] ">
          VIEW OUR COLLECTIONS
        </div>
      </div>

      {/* NECKLACES */}
      <div className="flex justify-center mb-12 ">NECKLACES</div>
      <div className="grid md:grid-cols-4 gap-8 w-full px-8">
        <Product
          //   image="./Images/cross.jpg"
          id={1}
          desc="Cross-Shaped necklace"
          price={90}
          ratings={4}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={2}
          desc="Cross-Shaped necklace"
          price={210}
          ratings={3}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={3}
          desc="Cross-Shaped necklace"
          price={150}
          ratings={1}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={4}
          desc="Cross-Shaped necklace"
          price={130}
          ratings={1}
        />
      </div>

      <Hero class={"bg-primary"} desc={"We sell only quality products"} />

      {/* EARRINGS */}
      <div className="flex justify-center mt-24 mb-12">EARRINGS</div>
      <div className="grid  md:grid-cols-4 gap-8 w-full px-8">
        <Product
          //   image="./Images/cross.jpg"
          id={5}
          desc="Cross-Shaped necklace"
          price={10}
          ratings={4}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={6}
          desc="Lenovo LP40 Wireless Earphone Bluetooth 5.0 Waterproof Headset"
          price={10}
          ratings={3}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={7}
          desc="Cross-Shaped necklace"
          price={10}
          ratings={1}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={8}
          desc="Cross-Shaped necklace"
          price={188}
          ratings={1}
        />
      </div>

      <Hero class={"bg-primary"} desc={"CHAPTER 40 Jewelleries"} />

      {/* RINGS */}
      <div className="flex justify-center mt-24 mb-12">RINGS</div>
      <div className="grid  md:grid-cols-4 gap-8 w-full px-8">
        <Product
          //   image="./Images/cross.jpg"
          id={9}
          desc="Cross-Shaped necklace"
          price={10}
          ratings={4}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={10}
          desc="Cross-Shaped necklace"
          price={870}
          ratings={3}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={11}
          desc="Cross-Shaped necklace"
          price={50}
          ratings={1}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={12}
          desc="Cross-Shaped necklace"
          price={10}
          ratings={1}
        />
      </div>

      <Hero
        class={"bg-primary"}
        desc={"Purchase now and receive it instantly"}
      />

      {/* WRIST-WATCHES */}
      <div className="flex justify-center mt-24 mb-12">WATCHES</div>
      <div className="grid  md:grid-cols-4 gap-8 w-full px-8">
        <Product
          //   image="./Images/cross.jpg"
          id={13}
          desc="Cross-Shaped necklace"
          price={20}
          ratings={4}
        />
        <Product
          //   image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price={14}
          ratings={3}
        />
        <Product
          //   image="./Images/cross.jpg"
          desc="Cross-Shaped necklace"
          price={15}
          ratings={1}
        />
        <Product
          //   image="./Images/cross.jpg"
          id={16}
          desc="Cross-Shaped necklace"
          price={10}
          ratings={1}
        />
      </div>

      <div className="mt-20 flex items-center justify-center">
        <div className="w-max border-solid border-2 border-sky-500 py-[17px] px-[21px]">
          SEE WHAT OUR CUSTOMERS ARE SAYING
        </div>
      </div>

      {/* <Hero class={"bg-primary"} desc={"See what our customers are saying"} /> */}

      <Footer />

      {/* <div>
        <Hero class={"bg-sky-500"} desc={"SHOP HOME & DECOR"} />
      </div> */}
    </div>
  );
}

export default Home;
