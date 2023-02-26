import React from "react";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Payment() {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const getTotal = () => {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].price;
    }
    return sum;
  };
  return (
    <div>
      <Header />

      <div className="payment__method mt-4 px-4 ">
        <h1 className="mb-4 text-xl font-bold">
          CHECKOUT (<Link to={"/checkout"}>{basket?.length} items</Link>)
        </h1>
        {/* Payment section - Delivery address */}
        <div className="flex border border-solid  border-black p-2 justify-between sm:flex-col">
          <div>This is your delivery address</div>
          <div className="w-9/12 sm:w-full">
            12 oak street <br /> London <br /> Nigeria
          </div>
        </div>
        {/* Payment section - Review items */}
        <div className="flex border mt-4 border-solid  border-black p-2 justify-between sm:flex-col">
          <div>These are your items</div>
          <div className="w-9/12 sm:w-full">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  desc={item.desc}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
        {/* Payment section - Payment method */}
        <div className="my-4 text-xl font-bold w-full flex flex-col items-center">
          <div>
            <h1>TOTAL: {"₦" + getTotal()}</h1>
            <button className="bg-red-100 rounded-xl p-1 w-full mt-2">
              PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
