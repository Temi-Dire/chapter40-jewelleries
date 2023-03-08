import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal";
import Header from "../components/Header";
import Oops from "../components/Oops";
import { useNavigate } from "react-router-dom";

function Checkout() {
  //eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  return (
    <div>
      {user ? (
        <div>
          <Header />
          <p className="mx-[52px] mt-[20px] border-b border-solid border-grey md:w-[824.667px]">
            CART ({basket.length})
          </p>
          <div className="md:flex px-[20px]">
            <div className="checkout__left w-full mr-4 border-1 rounded-lg border-solid border-[grey] mb-2 md:mb-0 px-8">
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
            <div className="checkout__right">
              <Subtotal />
            </div>
          </div>
        </div>
      ) : (
        <Oops
          msg={"OOPS!"}
          desc={"Looks like you're not logged in yet"}
          btn={"SIGN IN"}
          click={() => navigate("/login")}
        />
      )}
    </div>
  );
}

export default Checkout;
