import React from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import Product from "../components/Product";
import necklaces from "../data/necklaces";

function Necklace() {
  return (
    <div>
      <Header />
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
