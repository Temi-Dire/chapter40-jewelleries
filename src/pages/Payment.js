import React, { useState } from "react";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import { db } from "../firebase";
import Oops from "../components/Oops";
//eslint-disable-next-line
import { collection, addDoc, doc } from "firebase/firestore";
// import { PaystackButton } from "react-paystack";

function Payment() {
  //eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  const [streetaddress, setStreetAddress] = useState("");
  const [state, setState] = useState("");
  const [location, setNoLocation] = useState(false);

  async function addToFireStore2() {
    try {
      const documentRef = doc(db, "user", user.uid);
      const ordersRef = collection(documentRef, "orders");
      await addDoc(ordersRef, {
        basket: basket,
        amount: getTotal(),
        state: state,
        street: streetaddress,
        email: user?.email,
      });
      alert("Document created successfully!");
    } catch (e) {
      console.error("Error creating document:", e);
      alert(
        "An error occurred while creating the document. Please try again later."
      );
    }
  }

  const getTotal = () => {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].price;
    }
    return sum;
  };

  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_bbaa5b02968054dc8332e5c2fc4b566c84d08f4e",
      email: user.email,
      amount: getTotal() * 100,
    });
    dispatch({
      type: "EMPTY_BASKET",
    });
    // navigate("/orders")
  };

  const invalidData = () => {
    setNoLocation(true);
  };

  return (
    <div>
      <Header />

      {location && (
        <Oops
          click={() => setNoLocation(false)}
          msg={"OOPS"}
          desc={
            "You haven't entered your address or you haven't added any item to the basket"
          }
          btn={"OK"}
        />
      )}

      <div className="payment__method mt-4 px-4 ">
        <h1 className="mb-4 text-xl font-bold">
          CHECKOUT (<Link to={"/checkout"}>{basket?.length} items</Link>)
        </h1>
        {/* Payment section - Delivery address */}
        <div className="sm:mb-6 mb-4">Enter Your Delivery Address</div>
        <div className="md:grid md:grid-cols-3 md: gap-4">
          <div className="col-span-2">
            <div className="flex w-full justify-between sm:flex-col">
              <div className="sm:w-full">
                <input
                  className="w-full rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0] mb-4"
                  type="text"
                  placeholder="e.g 12, Odunuga Street, Ikeja"
                  value={streetaddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
                <input
                  className="w-full rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0] mb-4"
                  type="text"
                  placeholder="e.g Lagos"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  className="w-full  rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0] mb-4"
                  type="text"
                  placeholder="Password"
                  value="Nigeria"
                />
              </div>
            </div>
            <div>These are your items</div>
            {/* <div className="flex border mt-4 border-solid  border-black p-2 justify-between sm:flex-col"> */}
            <div className="sm:w-full">
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    desc={item.desc}
                    price={item.price}
                  />
                );
              })}
              {/* </div> */}
            </div>
          </div>
          {/* Payment section - Review items */}
          {/* Payment section - Payment method */}
          <div>
            <h1>DELIVERY FEES: {"₦500"}</h1>
            <h1>TOTAL: {"₦" + getTotal()}</h1>
            <p>Please Note: Delivery fees are based on your location</p>
            <button
              className="bg-red-100 rounded-xl p-1 w-full mt-2"
              type="submit"
              onClick={
                streetaddress.length !== 0 && basket.length !== 0
                  ? payWithPaystack
                  : invalidData
              }
            >
              PAY
            </button>
            <button
              className="bg-red-100 rounded-xl p-1 w-full mt-2"
              onClick={addToFireStore2}
            >
              ADD TO FIRESTORE2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
