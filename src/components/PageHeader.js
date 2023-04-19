import React from "react";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function PageHeader() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="bg-[#dea9de] z-10 text-white flex justify-between px-4 py-4 ">
      <Link to={"/"} className="flex justify-center items-center">
        <div className="flex items-center">
          <FontAwesomeIcon
            className="hover:text-purple-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            icon={faArrowLeftLong}
          />
          <span className="md:flex md:flex-col font-['Aclonica'] text-sm md:text-2xl italic  ml-2 mb-0">
            {/* Change the font-style of logo */}
            <span>CHAPTER40 </span>
            <span>JEWELLERY</span>
          </span>
        </div>
      </Link>

      <div className="md:hidden flex items-center">
        <Link to={"/checkout"}>
          <div className="hover:text-purple-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <ShoppingCartIcon
              // sx={{ color: deepOrange[500] }}
              style={{fontSize: 20}}
              className="ml-2"
            />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PageHeader;
