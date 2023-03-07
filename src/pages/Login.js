import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        console.error(error.message);
      });
  };

  return (
    <div className="text-primary">
      <div className="h-[100vh] flex justify-center items-center md:w-full">
        <div className="md:bg-primary md:w-[200px] md:h-[200px] md:mr-24 md:rounded-[100%]"></div>
        <div className="sm:w-7/10  border border-solid border-primary p-8">
          <h1 className="sm:mb-8 sm:border-primary sm:px-8 sm:py-4 sm:bg-primary sm:text-white sm:w-[70%] sm:my-0 sm:mx-auto text-center mb-4">
            SIGN-IN
          </h1>
          <form action="" className="md:w-full" onSubmit={login}>
            <div className="bg-white p-2 rounded-lg text-sm w-full mb-4 border border-solid border-primary">
              <h5>Email</h5>
              <input
                className="w-full outline-none text-black placeholder:text-[lightgray]"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="bg-white p-2 w-full rounded-lg text-sm mb-4 border border-solid border-primary">
              <h5>Password</h5>
              <input
                className="w-full outline-none text-black placeholder:text-[lightgray]"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              className="bg-inherit w-full p-2 button--sign-in rounded-[50px] border border-solid border-primary hover:bg-primary hover:text-white"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-black mt-4">
            If you don't have an account please create one now!
          </p>
          <div className="w-full flex justify-center mt-2">
            <button
              className="bg-inherit w-fit p-2 border border-solid border-primary hover:bg-primary hover:text-white"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Create An Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
