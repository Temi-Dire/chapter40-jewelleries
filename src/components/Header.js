import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Header() {
  //eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          console.log("Sign Out was successful");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div className="sticky top-0 bg-white">
      <div
        className={`flex justify-between mx-4 py-2 md:mx-8 sm:flex sm:items-center`}
      >
        <Link to={"/"}>
          <div className="flex flex-col font-['Aclonica'] text-2xl italic  ">
            {/* Change the font-style of logo */}
            <span>CHAPTER40 </span>
            <span>JEWELLERY</span>
          </div>
        </Link>
        <div className="sm:hidden">
          <div className="flex items-center h-full justify-between font-['Rubik'] mx-[10px] ">
            <Link to="/necklaces">
              <span className="mr-8 hover:text-primary ">Necklaces</span>
            </Link>
            <Link to="/earrings">
              <span className="mr-8 ">Earrings</span>
            </Link>
            <Link to="/rings">
              <span className="mr-8 ">Rings</span>
            </Link>
            <Link to="/watches">
              <span className="">Watches</span>
            </Link>
          </div>
        </div>
        <div className="inline flex items-center sm:hidden">
          <Link to={!user && "/login"}>
            <div
              className="flex flex-col leading-loose "
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
          <div className="flex flex-col leading-loose ">
            <span className="text-[10px]">Returns</span>
            <span className="mr-8 text-[13px] font-['Rubik']">& Orders</span>
          </div>
          <Link to={"/checkout"}>
            <ShoppingCartIcon
              // sx={{ color: deepOrange[500] }}
              className="ml-2"
            />
          </Link>
          <span>{basket?.length}</span>
        </div>

        <div className="md:hidden">
          <Link to={"/checkout"}>
            <div className="flex">
              <ShoppingCartIcon
                // sx={{ color: deepOrange[500] }}
                class="w-8 h-8 flex"
              />
              {basket?.length}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
