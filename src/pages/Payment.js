import React from "react";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { Link, useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import { db } from "../firebase";
//eslint-disable-next-line
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
// import { PaystackButton } from "react-paystack";

function Payment() {
  //eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  async function addToFireStore2() {
    try {
      const documentRef = doc(db, "user", user.uid);
      const ordersRef = collection(documentRef, "orders");
      await addDoc(ordersRef, { basket: basket, amount: getTotal() });
      alert("Document created successfully!");
    } catch (e) {
      console.error("Error creating document:", e);
      alert(
        "An error occurred while creating the document. Please try again later."
      );
    }
  }

  // async function addToFireStore2(e) {
  //   e.preventDefault();
  //   try {
  //     const docRef = await addDoc(collection(db, "orders"), {
  //       basket: basket,
  //       amount: getTotal(),
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (err) {
  //     console.error("Error adding document: ", err);
  //   }
  // }

  const navigate = useNavigate();
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
