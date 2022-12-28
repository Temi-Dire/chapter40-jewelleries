import React from "react";

function Hero(props) {
  return (
    <div>
      <div className={`${props.class} w-full my-20`}>
        <div className="py-44 text-center">{props.desc}</div>
      </div>
    </div>
  );
}

export default Hero;
