import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import earrings from "../data/earrings";

function Earring() {
  return (
    <div>
      <Header />
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
