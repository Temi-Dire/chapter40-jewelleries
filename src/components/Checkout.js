import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="md:flex p-[20px]">
      <div className="checkout__left w-full mr-4 border-2 border-solid border-[grey] mb-2 md:mb-0">
        <CheckoutProduct />
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
