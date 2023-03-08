import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <div className="h-screen sm:flex sm:justify-center sm:items-center md:grid md:grid-cols-2 md:items-center md:justify-items-center">
        <div className="sm:hidden h-screen w-full bg-white"></div>
        <div className="md:w-7/10 p-8">
          <h1 className="sm:mb-8 text-3xl sm:font-bold font-extrabold sm:w-[70%] sm:my-0text-center mb-4">
            Welcome
          </h1>
          <h1 className="sm:mb-8 sm:text-xl sm:font-bold  mb-4">
            Create your account today!
          </h1>
          <form action="" onSubmit={register}>
            <input
              className="w-full h-16 rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0] mb-10"
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full h-16 rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0] mb-10"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-center">
              <button
                className="bg-white w-3/5 p-2 rounded-[50px]  hover:bg-black hover:text-white"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="text-center mt-4 ">
            <span>Already have an Account?</span>
            <Link to={"/login"}>
              <span className="ml-4 font-bold">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
