import React from "react";
import rings from "../data/rings";
import Product from "../components/Product";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";

function Ring() {
  return (
    <div>
      <div className="sticky top-0 md:hidden">
        <PageHeader />
      </div>
      <div className="sticky top-0 sm:hidden">
        <Header />
      </div>
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
