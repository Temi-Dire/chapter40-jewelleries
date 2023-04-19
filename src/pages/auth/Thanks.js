import React, { useState } from 'react'
import { ArrowRight } from '@mui/icons-material'
import { useStateValue } from '../../StateProvider'
import { addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase';

function Thanks() {
  const [username, setUsername] = useState("");
  const [{basket, user}, dispatch] = useStateValue();
  async function addToFirestore(e) {
    e.preventDefault();
    try {
      const documentRef = doc(db, "something", user.uid);
      const ordersRef = collection(documentRef, "username")
      await addDoc(ordersRef, {
        username
      });
      alert("Document was created successfully");
    } catch (error) {
      console.error('Error creating document', error)
      alert("An error occured while creating this document")
    }
  }
  return (
    <div>
      {user && <div className="sm:flex sm:flex-col sm:justify-center sm:items-center mt-32 lg:ml-32 text-center lg:text-start">
            <h1 className='font-extrabold text-6xl mb-10 '>Account Created!</h1>
            <h2 className='text-3xl mb-4'>Please enter your preferred username</h2>
            <form action="">
              <input
                    className="w-60 h-10 bg-[##FAFAFA] outline-none border-b border-b-[#E3E0E0] mb-10"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
            <button
                  className="bg-white block w-60 border border-black p-2 rounded-[50px]  hover:bg-black hover:text-white"
                  type="submit"
                  onClick={addToFirestore}
                >
                  Continue
                </button>
            </form>
      </div>}
    </div>
  )
}

export default Thanks