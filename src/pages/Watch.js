import React from "react";
import watches from "../data/watches";
import Product from "../components/Product";
import Header from "../components/Header";

function Watch() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
        {watches.map((item) => {
          return <Product desc={item.desc} price={item.price} />;
        })}
      </div>
    </div>
  );
}

export default Watch;
