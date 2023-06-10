import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Oops from "../components/Oops";
import Order from "../components/Order";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);
  const documentRef = doc(db, "user", user.uid);
  const ordersCollectionRef = collection(documentRef, "orders");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(ordersCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setOrderList(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getMovieList();

    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      {orderList !== 0 ? (
        <div>
          <h1>YOUR ORDERS</h1>
          <div>
            {orderList.map((order) => (
              <div>
                <p>
                  {order.basket.map((item) => (
                    <Order id={item.id} desc={item.desc} price={item.price} />
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Oops
          msg={"OOPS"}
          desc={"Looks like you've not yet made an order"}
          btn={"ORDER NOW"}
          click={() => navigate("/")}
        />
      )}
    </div>
  );
}

export default Orders;

// import { collection, doc, getDocs } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import { db } from "../firebase";
// import { useStateValue } from "../StateProvider";

// function Orders() {
//   const [orderList, setOrderList] = useState([]);
//   const ordersCollectionRef = collection(db, "orders");
//   useEffect(() => {
//     const getMovieList = async () => {
//       try {
//         const data = await getDocs(ordersCollectionRef);
//         const filteredData = data.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         setOrderList(filteredData);
//         console.log(filteredData);
//       } catch (err) {
//         alert(err);
//       }
//     };
//     getMovieList();
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div>
//         {orderList.map((movie) => (
//           <div>
//             <p>{movie.amount}</p>
//             <p>{movie.basket[0].desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Orders;
