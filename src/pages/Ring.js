import React from "react";
import rings from "../data/rings";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/footer";

function Ring() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {rings.map((item) => {
          return <Product desc={item.desc} price={item.price} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Ring;
