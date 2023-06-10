import React from "react";
import { useStateValue } from "../StateProvider";
//eslint-disable-next-line
function Product({ id, desc, price }) {
  //eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        desc: desc,
        price: price,
      },
    });
  }

  function modifySentence(sentence) {
    let newSentence;
    newSentence = sentence.substring(0, 21) + '...';
    return newSentence;
  }


  return (
    <div className="w-full text-[#264143]">
      {/* <div className="w-[200px] md:w-[250px]"> */}

      <div className="w-full h-[200px] bg-red-500 rounded-t-[4px]"></div>
      {/*rounded-t-lg for border*/}
      {/* <img
          src={image}
          alt="Product"
          className="w-full max-w-[250px] h-[200px] md:h-[250px] rounded-t-lg"
        /> */}
      <div className=" flex flex-col bg-white">
        <p>{modifySentence(desc)}</p>
        <p>{"₦" + price}</p>
        <button
          className="bg-red-100 rounded p-2 w-full flex-end"
          onClick={addToBasket}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
