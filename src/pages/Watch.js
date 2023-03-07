import React from "react";
import watches from "../data/watches";
import Product from "../components/Product";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import Header from "../components/Header";

function Watch() {
  return (
    <div>
      <div className="sticky top-0 md:hidden">
        <PageHeader />
      </div>
      <div className="sticky top-0 sm:hidden">
        <Header />
      </div>
      {/* <Header /> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {watches.map((item) => {
          return <Product desc={item.desc} price={item.price} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Watch;
