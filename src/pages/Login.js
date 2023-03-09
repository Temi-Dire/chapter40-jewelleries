import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { motion as m } from "framer-motion";
import Oops from "../components/Oops";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noSuchUser, setNoSuchUser] = useState(false);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    // some fancy firebase shit
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate("/");
        }
      })
      .catch((error) => {
        setNoSuchUser(true);
      });
  };

  return (
    <div>
      {!noSuchUser ? (
        <div className="h-screen sm:flex sm:justify-center items-center md:grid md:grid-cols-2  md:justify-items-center">
          <div className="sm:hidden h-screen w-full bg-white"></div>
          <div className="md:w-7/10 p-8">
            <h1 className="sm:mb-8 text-3xl sm:font-bold font-extrabold sm:w-[70%] sm:my-0text-center mb-4">
              Welcome
            </h1>
            <h1 className="sm:mb-8 sm:text-xl sm:font-bold  mb-4">
              Please login to your account
            </h1>
            <form action="" onSubmit={login}>
              <m.input
                whileFocus={{ borderColor: "black" }}
                className="w-full h-16 rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0] mb-10"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <m.input
                whileFocus={{ borderColor: "black" }}
                className="w-full h-16 rounded-lg bg-[##FAFAFA] outline-none py-5 px-4 border border-[#E3E0E0] mb-10"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-center">
                <m.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white border border-black w-3/5 p-2 rounded-[50px]  hover:bg-black hover:text-white"
                  type="submit"
                >
                  Login
                </m.button>
              </div>
            </form>
            <div className="text-center mt-4 ">
              <span>Don't have an account?</span>
              <m.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="ml-4 font-bold"
                onClick={() => navigate("/signup")}
              >
                Create One
              </m.button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center ">
          <Oops
            msg={"OOPS"}
            desc={
              "Looks like you've entered an incorrect login information. Please if you don't have an account, you can create one now"
            }
            click={() => setNoSuchUser(false)}
            btn={"Ok"}
          />
        </div>
      )}
    </div>
  );
}

export default Login;
