import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  //eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  const updateUserName = () => {
    dispatch({
      type: "SET_USER",
      userName: username,
    });
  };

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    // some fancy firebase shit
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="text-primary">
      <div className="h-[100vh] flex justify-center items-center md:w-full">
        <div className="sm:w-7/10 border border-solid border-primary p-8">
          <h1 className="sm:mb-8 sm:border-primary sm:px-8 sm:py-4 sm:bg-primary sm:text-white sm:w-[70%] sm:my-0 sm:mx-auto text-center mb-4">
            SIGN-UP
          </h1>
          <form action="" className="md:w-full" onSubmit={register}>
            <div className="bg-white p-2 rounded-lg text-sm w-full mb-4  border border-solid border-primary">
              <h5>User Name</h5>
              <input
                className="w-full outline-none text-black placeholder:text-[lightgray]"
                type="text"
                placeholder="Please enter a user name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="bg-white p-2 rounded-lg text-sm w-full mb-4  border border-solid border-primary">
              <h5>Email</h5>
              <input
                className="w-full outline-none text-black placeholder:text-[lightgray]"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="bg-white p-2 w-full rounded-lg text-sm mb-4 border border-solid border-primary">
              <h5>Password</h5>
              <input
                className="w-full outline-none text-black placeholder:text-[lightgray]"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-inherit w-full p-2 button--sign-in rounded-[50px] border border-solid border-primary hover:bg-primary hover:text-white"
              type="submit"
              onClick={updateUserName}
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4">
            Enter your email and password to get started.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
