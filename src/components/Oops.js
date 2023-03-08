import React from "react";
import { useNavigate } from "react-router-dom";

function Oops({ msg, desc, btn, click }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-4/5 md:w-3/5  flex flex-col justify-center items-center rounded-[20px]">
          <p className="font-bold mb-4">{msg}</p>
          <p className="font-bold mb-8">{desc}</p>
          <button
            className=" bg-inherit text-[#060825] border-[#060825] hover:text-white hover:bg-[#060825] border-2 py-2 px-3 text-lg font-bold rounded-xl flex justify-center items-center "
            onClick={click}
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Oops;
