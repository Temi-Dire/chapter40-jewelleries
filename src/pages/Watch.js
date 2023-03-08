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
      <div className="w-full bg-[purple] h-[250px]  my-8 flex items-center justify-center text-white text-2xl sm:text-lg font-['Aclonica']">
        <p>VIEW OUR WATCH COLLECTION</p>
      </div>
      {/* <Header /> */}
      <div className="grid md:grid-cols-4 gap-8 p-8">
        {watches.map((item) => {
          return <Product desc={item.desc} price={item.price} />;
        })}
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Watch;
