import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Necklace from "./pages/Necklace";
import Earring from "./pages/Earring";
import Ring from "./pages/Ring";
import Watch from "./pages/Watch";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./pages/Payment";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import Orders from "./pages/Orders";
import Popup from "./components/Popup";
import Oopss from "./pages/Oopss";
import Thanks from "./pages/auth/Thanks";

//USE-EFFECT IS CAUSING A PROBLEM !!!!!

function App() {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  // will only run once when the app component loads...
  // The use effect is like an if statement
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    //eslint-disable-next-line
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/necklaces" element={<Necklace />} />
          <Route exact path="/earrings" element={<Earring />} />
          <Route exact path="/rings" element={<Ring />} />
          <Route exact path="/watches" element={<Watch />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/modal" element={<Popup />} />
          <Route exact path="/oopss" element={<Oopss />} />
          <Route exact path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
