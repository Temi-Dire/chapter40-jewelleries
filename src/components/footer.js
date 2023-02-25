import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChain,
  faRing,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Footer() {
  //eslint-disable-next-line
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
    <div className="sticky bottom-0 md:hidden bg-white px-2">
      <hr />
      <div
        className={
          "flex justify-between mx-2 py-2 mx-8 flex items-center text-xs "
        }
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
        <Link to={!authUser && "/login"}>
          <span className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} />
            <span>
              {authUser ? (
                <button onClick={userSignOut}>Sign Out</button>
              ) : (
                "Sign In"
              )}
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
