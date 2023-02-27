import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChain,
  faRing,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function Footer() {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

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
    <div className="sticky bottom-0 w-full md:hidden bg-white ">
      <hr />
      <div
        className={"flex justify-between py-4 mx-8 flex items-center text-xs "}
      >
        <Link to={"/earrings"}>
          <span className="flex flex-col items-center">
            <FontAwesomeIcon icon={faRing} />
            <p>Earrings</p>
          </span>
        </Link>
        <Link to={"/rings"}>
          <span className="flex flex-col items-center">
            <FontAwesomeIcon icon={faRing} />
            <p>Rings</p>
          </span>
        </Link>
        <Link to={"/watches"}>
          <span className="flex flex-col items-center">
            <FontAwesomeIcon icon={faStopwatch} />
            <p>Watches</p>
          </span>
        </Link>
        <Link to={"/necklaces"}>
          <span className="flex flex-col items-center">
            <FontAwesomeIcon icon={faChain} />
            <p>Necklace</p>
          </span>
        </Link>
        <Link to={!user && "/login"}>
          <span
            className="flex flex-col items-center"
            onClick={handleAuthentication}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>{user ? "Sign In" : "Sign Out"}</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
