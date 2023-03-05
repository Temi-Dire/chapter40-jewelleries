import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Order from "../components/Order";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [movieList, setMovieList] = useState([]);
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
        setMovieList(filteredData);
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
      {user ? (
        <div>
          <h1>YOUR ORDERS</h1>
          <div>
            {movieList.map((movie) => (
              <div>
                <p>
                  {movie.basket.map((item) => (
                    <Order id={item.id} desc={item.desc} price={item.price} />
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>PLEASE SIGN IN OR CREATE AN ACCOUNT FIRST</div>
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
//   const [movieList, setMovieList] = useState([]);
//   const ordersCollectionRef = collection(db, "orders");
//   useEffect(() => {
//     const getMovieList = async () => {
//       try {
//         const data = await getDocs(ordersCollectionRef);
//         const filteredData = data.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         setMovieList(filteredData);
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
//         {movieList.map((movie) => (
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
