import React from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="flex flex-col justify-between w-full md:w-[300px] h-[150px] p-[20px] bg-[#f3f3f3] border border-solid border-[#dddddd] rounded">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" name="" id="" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
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
