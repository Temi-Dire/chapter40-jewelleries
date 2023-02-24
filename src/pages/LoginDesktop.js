<div className="sign-in--container w-full flex justify-center items-center sm:hidden">
  <div className="bg-primary w-[200px] h-[200px] mr-24 rounded-[100%]"></div>
  {/* //THE LOGO */}
  <h1 className="text-center mb-4">SIGN-IN</h1>
  <div>
    <form action="" className="w-[300px]">
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
</div>;
