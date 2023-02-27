import React from "react";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
// import { PaystackButton } from "react-paystack";

function Payment() {
  //eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();
  const getTotal = () => {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].price;
    }
    return sum;
  };

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_bbaa5b02968054dc8332e5c2fc4b566c84d08f4e",
      email: user.email,
      amount: getTotal() * 100,
    });
    // dispatch({
    //   type: "EMPTY_BASKET",

    // })
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
            <button
              className="bg-red-100 rounded-xl p-1 w-full mt-2"
              type="submit"
              onClick={payWithPaystack}
            >
              PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
