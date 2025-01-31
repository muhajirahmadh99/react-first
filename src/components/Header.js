import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // console.log(loggedInUser);

  //Subscribing to the using a  selector is hook
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-slate-300 p-4">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 gap-4">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
          <li>
            <Link to={"/"} className="linkTags">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="linkTags">
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="linkTags">
              Contact
            </Link>
          </li>
          <li>
            <Link to={"/grocery"} className="linkTags">
              Grocery
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="linkTags">
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <li>
            <button
              className="log-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
