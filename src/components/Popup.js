import React from "react";

function Popup({ click, msg, desc, btn }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-4/5 md:w-3/5 h-[365px] flex flex-col justify-center items-center border border-[gray] rounded-[20px] bg-white">
          <p className="font-bold mb-4">{msg}</p>
          <p className="font-bold mb-16">{desc}</p>
          <button
            className="w-32 bg-inherit text-[#060825] border-[#060825] hover:text-white hover:bg-[#060825] border-2 py-2 px-3 text-lg font-bold rounded-xl flex justify-center items-center "
            onClick={click}
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
