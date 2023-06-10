import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { deepOrange } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Popup from "./Popup";
import { useState } from "react";

function Header() {
  //eslint-disable-next-line
  const [signoutsuccessful, setSignOutSuccessful] = useState(false);
  const navigate = useNavigate("/");

  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          console.log("Sign Out was successful");
          setSignOutSuccessful(true);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div>
      <nav className="bg-slate-50 z-10 text-black ">
        <div
          className={`flex justify-between mx-4 py-4 md:mx-8 sm:flex sm:items-center`}
        >
          <Link to={"/"}>
            <div className="md:flex md:flex-col font-['Aclonica'] text-sm md:text-2xl italic  ">
              {/* Change the font-style of logo */}
              <span>CHAPTER40 </span>
              <span>JEWELLERY</span>
            </div>
          </Link>
          <div className="sm:hidden">
            <div className="flex items-center h-full justify-between font-['Rubik'] mx-[10px] ">
              <Link to="/necklaces">
                <span className="mr-8  block lg:inline-block  hover: transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Necklaces
                </span>
              </Link>
              <Link to="/earrings">
                <span className="mr-8 block lg:inline-block  hover: transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Earrings
                </span>
              </Link>
              <Link to="/rings">
                <span className="mr-8 block lg:inline-block  hover: transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Rings
                </span>
              </Link>
              <Link to="/watches">
                <span className="block lg:inline-block hover: transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  Watches
                </span>
              </Link>
            </div>
          </div>
          <div className="inline-flex items-center sm:hidden">
            <Link to={!user && "/login"}>
              <div
                className="flex flex-col leading-loose hover: transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={handleAuthentication}
              >
                <span className="mr-8 text-[13px] font-['Rubik']">
                  Hello {user ? user.email.split("@")[0] : "Guest"},
                </span>
                <span className="mr-8 text-[13px] font-['Rubik']">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
            <Link to={user ? "/orders" : "/oopss"}>
              <div className="flex flex-col leading-loose hover: transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <span className="text-[10px]">Returns</span>
                <span className="mr-8 text-[13px] font-['Rubik']">
                  & Orders
                </span>
              </div>
            </Link>
            <Link to={"/checkout"}>
              <div className="hover: transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <ShoppingCartIcon
                  // sx={{ color: deepOrange[500] }}
                  className="ml-2"
                />
                <span>{basket?.length}</span>
              </div>
            </Link>
          </div>
          <div className="md:hidden">
            <Link to={"/checkout"}>
              <div className="hover: transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <ShoppingCartIcon
                  // sx={{ color: deepOrange[500] }}
                  className="ml-2"
                />
                <span>{basket?.length}</span>
              </div>
            </Link>
          </div>
        </div>
        {/* <div className="h-[0.5px] bg-black"/> */}
      </nav>
      {signoutsuccessful && (
        <Popup
          msg={"THANK YOU!"}
          desc={"You have been successfully logged out"}
          btn={"OK"}
          click={() => {
            setSignOutSuccessful(false);
            navigate("/");
          }}
        />
      )}
    </div>
  );
}

export default Header;
