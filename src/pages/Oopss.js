import React from "react";
import { useNavigate } from "react-router-dom";
import Oops from "../components/Oops";

function Oopss() {
  const navigate = useNavigate();
  return (
    <div>
      <Oops
        msg={"OOPS!!!"}
        desc={"Looks like you're not signed in yet"}
        btn={"SIGN IN"}
        click={() => {
          navigate("/login");
        }}
      />
    </div>
  );
}

export default Oopss;
