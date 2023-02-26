// import { onAuthStateChanged, signOut } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { auth } from "../firebase";

// function AuthDetails() {
//   const [authUser, setAuthUser] = useState(null);
//   useEffect(() => {
//     const listen = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAuthUser(user);
//       } else {
//         setAuthUser(null);
//       }
//     });
//     return () => {
//       listen();
//     };
//   }, []);
//   const userSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("Sign Out was successful");
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
//   return (
//     <div>
//       <span className="text-[10px]">
//         Hello {authUser ? authUser.email : "Guest"},
//       </span>
//       <span className="mr-8 text-[13px] font-['Rubik']">
//         {authUser ? <button onClick={userSignOut}>Sign Out</button> : "Sign In"}
//       </span>
//     </div>
//   );
// }

// export default AuthDetails;
