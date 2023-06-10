import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  const navigate = useNavigate();

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
    <div className="sticky top-[100px]">
      <div className="flex flex-col justify-between w-full md:w-[300px] h-[150px] p-[20px] bg-[#f3f3f3] border border-solid border-[#dddddd] rounded">
        <>
          <p>
            Subtotal ({basket?.length} items): <strong>{getTotal()}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" name="" id="" /> This order contains a gift
          </small>
        </>
        <button
          className="bg-[#f0c14b] border border-solid border-[#a88734] mt-[10px] rounded-sm w-full h-[30px] rounded"
          onClick={() => {
            navigate("/payment");
          }}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
