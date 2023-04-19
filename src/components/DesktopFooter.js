import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function DesktopFooter() {
  const navigate = useNavigate();

  const date = new Date();
  const currentYear = date.getFullYear();

  const [{user}, dispatch] = useStateValue()

  return (
    <div>
      {!user ? (
        <>
          <div className="mt-10">
              <div className="border-b border-b-slate-600" />
              <div className="flex flex-col justify-center items-center my-5">
                <h1 className="mb-2">What are you waiting for?</h1>
                <button
                  className="bg-white border border-black px-4  rounded-[50px]  hover:bg-black hover:text-white mb-2"
                  type="submit"
                  onClick={() => navigate("/login")}
                >
                  SIGN IN
                </button>
                <span>
                  <span>New customer? </span>
                  <button
                    className="text-blue-600 hover:border-b border-b-blue-600"
                    onClick={() => navigate("/signup")}
                  >
                    Click here
                  </button>
                </span>
              </div>
          </div>
        </>
      ) : (
            <div className="mt-10">
                <div className="border-b border-b-slate-500 mb-5"/>
                        <div className="flex justify-center mb-5">
                <div>© Copyright {currentYear}. Chapter40 Jewelleries.</div>
                        </div>
            </div>
      )}
    </div>
  );
}

export default DesktopFooter;
