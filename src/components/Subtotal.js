import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  function getTotal() {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].price;
    }
    return sum;
  }
  return (
    <div className="flex flex-col justify-between w-full md:w-[300px] h-[150px] p-[20px] bg-[#f3f3f3] border border-solid border-[#dddddd] rounded">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₦"}
      />
      <button className="bg-[#f0c14b] border border-solid border-[#a88734] mt-[10px] rounded-sm w-full h-[30px] rounded">
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
