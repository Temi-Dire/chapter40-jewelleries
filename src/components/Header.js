import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase";
// Margin on nav-bar needs to be fixed and style for chapter40

function Header() {
  //To change the number according to how many items the user adds to basket
  //eslint-disable-next-line
  const [{ basket, userName }, dispatch] = useStateValue();
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

  //To change burger class
  const [menu_class, setMenuClass] = useState("hidden");
  const [nav_bar, setNavBar] = useState("");

  const updateMenu = () => {
    setMenuClass("block");
    setNavBar("hidden");
  };

  const closeMenu = () => {
    setMenuClass("hidden");
    setNavBar("block");
  };

  return (
    <div className="sticky top-0 bg-[white]">
      <div className={`flex justify-between mx-4 py-2 md:mx-8 ${nav_bar} `}>
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
                Hello {authUser ? userName : "Guest"},
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

        <MenuIcon class="md:hidden w-8 h-8 flex" onClick={updateMenu} />
      </div>

      <div className={`relative ${menu_class}`}>
        <div className="w-full h-screen bg-[lightgrey] absolute top-o right-0 py-6 flex flex-col items-center justify-between">
          <span>Necklaces</span>
          <span>Earrings</span>
          <span>Rings</span>
          <span>Wrist-watch</span>
          <span>Sign In</span>

          <Link to={"/checkout"} onClick={closeMenu}>
            <ShoppingCartIcon className="icon__black" />
          </Link>
        </div>
        <CloseIcon
          class="absolute w-16 h-16 top- 0 right-0"
          onClick={closeMenu}
        />
      </div>
      <hr />
    </div>
  );
}

export default Header;
