import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Product from "../components/Product";
import earrings from "../data/earrings";

function Earring() {
  return (
    <div>
      <div className="sticky top-0 md:hidden">
        <PageHeader />
      </div>
      <div className="sticky top-0 sm:hidden">
        <Header />
      </div>
      <div className="w-full bg-[purple] h-[250px]  my-8 flex items-center justify-center text-white text-2xl sm:text-lg font-['Aclonica']">
        <p>VIEW OUR EARRING COLLECTION</p>
      </div>
      <div className="grid sm:mb-16 md:grid-cols-4 gap-8 p-8 ">
        {earrings.map((item) => {
          return <Product id={item.id} desc={item.desc} price={item.price} />;
        })}
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Earring;
