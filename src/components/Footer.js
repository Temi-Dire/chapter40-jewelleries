import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChain,
  faRing,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import Popup from "./Popup";

function Footer() {
  //eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();
  const [signoutsuccessful, setSignOutSuccessful] = useState(false);

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
    <div className=" w-full md:hidden bg-white ">
      <hr />
      <div
        className={"flex justify-between py-4 mx-8 items-center text-xs "}
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
            <span>{user ? "Sign Out" : "Sign In"}</span>
          </span>
        </Link>
      </div>
      {signoutsuccessful && (
        <Popup
          click={() => setSignOutSuccessful(false)}
          msg={"THANK YOU!"}
          desc={"You have successfully signed out"}
          btn={"OK"}
        />
      )}
    </div>
  );
}

export default Footer;
