import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Header() {
  //To change the number according to how many items the user adds to basket
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign Out was successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="sticky top-0 bg-[white]">
      {/* ${nav_bar}  */}
      <div
        className={`flex justify-between mx-4 py-2 md:mx-8 sm:flex sm:items-center`}
      >
        <Link to={"/"}>
          <div className="flex flex-col font-['Aclonica'] text-2xl italic  text-primary">
            {/* Change the font-style of logo */}
            <span>CHAPTER40 </span>
            <span>JEWELLERY</span>
          </div>
        </Link>
        <div className="sm:hidden">
          <div className="flex items-center h-full justify-between font-['Rubik'] mx-[10px] ">
            <Link to="/necklaces">
              <span className="mr-8 hover:text-primary hover:text-primary">
                Necklaces
              </span>
            </Link>
            <Link to="/earrings">
              <span className="mr-8 hover:text-primary">Earrings</span>
            </Link>
            <Link to="/rings">
              <span className="mr-8 hover:text-primary">Rings</span>
            </Link>
            <Link to="/watches">
              <span className="hover:text-primary">Watches</span>
            </Link>
          </div>
        </div>
        <div className="inline flex items-center sm:hidden">
          <Link to={!authUser && "/login"}>
            <div className="flex flex-col leading-loose">
              <span className="mr-8 text-[13px] font-['Rubik']">
                Hello {authUser ? authUser.email.split("@")[0] : "Guest"},
              </span>
              <span className="mr-8 text-[13px] font-['Rubik']">
                {authUser ? (
                  <button onClick={userSignOut}>Sign Out</button>
                ) : (
                  "Sign In"
                )}
              </span>
            </div>
          </Link>
          <div className="flex flex-col leading-loose ">
            <span className="text-[10px]">Returns</span>
            <span className="mr-8 text-[13px] font-['Rubik']">& Orders</span>
          </div>
          <Link to={"/checkout"}>
            <ShoppingCartIcon className="ml-2" />
          </Link>
          <span>{basket?.length}</span>
        </div>

        {/* onClick={updateMenu} */}
        <div className="md:hidden">
          <Link to={"/checkout"}>
            <div className="flex">
              <ShoppingCartIcon
                // sx={{ color: amber[100] }}
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
