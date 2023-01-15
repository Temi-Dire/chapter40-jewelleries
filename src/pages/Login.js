import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="text-primary">
      <div className="sign-in--container flex justify-center items-center md:hidden">
        <div className="w-[70%]  flex flex-col items-center justify-center p-4 ">
          {/* <div className="bg-[red] w-[100px] h-[100px] rounded-[100%] my-6 "></div> */}
          {/* <div className="text-2xl mb-6">CHAPTER40 JEWELLERY</div> */}
          {/* //THE LOGO */}
          <h1 className="mb-8 border-primary px-8 py-4 bg-primary text-white">
            SIGN-IN
          </h1>
          <div className="w-full">
            <form action="">
              <div className="bg-white p-2 rounded-lg text-sm w-full mb-4 shadow-3xl">
                <h5>Email</h5>
                <input
                  className="w-full outline-none text-black placeholder:text-[lightgray]"
                  type="text"
                  name=""
                  id=""
                  placeholder="Email Address"
                />
              </div>
              <div className="bg-white p-2 w-full rounded-lg text-sm mb-4 shadow-3xl">
                <h5>Password</h5>
                <input
                  className="w-full outline-none text-black placeholder:text-[lightgray]"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                />
              </div>
            </form>
            <button className="bg-[#inherit] w-full p-2 button--sign-in rounded-[50px] border border-solid border-primary hover:bg-primary hover:text-white">
              Sign In
            </button>
          </div>
          {/* <p>
            By signing in or creating an account you therefore agree to our terms
            and conditions. Please reaed our cookies and our ads below
          </p> */}
          {/* <button>Create An Account</button> */}
        </div>
      </div>
      {/* DESKTOP VERSION */}
      <div className="sign-in--container w-full flex justify-center items-center sm:hidden">
        <div className="bg-primary w-[200px] h-[200px] mr-24 rounded-[100%]"></div>
        {/* //THE LOGO */}
        <div>
          <form action="" className="w-[300px]">
            <h1 className="text-center mb-4">SIGN-IN</h1>
            <div className="bg-white p-2 rounded-lg text-sm w-full mb-4 shadow-lg">
              <h5>Email</h5>
              <input
                className="w-full outline-none "
                type="text"
                name=""
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="bg-white p-2 w-full rounded-lg text-sm mb-4 shadow-lg">
              <h5>Password</h5>
              <input
                className="w-full outline-none"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div>
          </form>
          <button className="bg-[inherit] w-full p-2 button--sign-in rounded-[50px] border border-solid border-primary hover:bg-primary hover:text-white">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
