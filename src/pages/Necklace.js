import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Product from "../components/Product";
import necklaces from "../data/necklaces";

function Necklace() {
  return (
    <div>
      <div className="sticky top-0 md:hidden">
        <PageHeader />
      </div>
      <div className="sticky top-0 sm:hidden">
        <Header />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {necklaces.map((item) => {
          return <Product id={item.id} desc={item.desc} price={item.price} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Necklace;
