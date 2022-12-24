import React from "react";

function Product(props) {
  return (
    <div>
      <div className="w-[250px]">
        <img src={props.src} alt={props.alt} className="w-[250px] h-[250px]" />
        <p>{props.desc}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default Product;
