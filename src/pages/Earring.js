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
      <div className="w-full bg-[purple] h-[250px]  my-8"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {earrings.map((item) => {
          return <Product id={item.id} desc={item.desc} price={item.price} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Earring;
