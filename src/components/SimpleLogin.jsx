import React, { useState } from "react";
import { app, database } from "firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";

let auth = getAuth(app);
let googleProvider = new GoogleAuthProvider();

export default function SimpleLogin() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");
  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collectionRef, data)
      .then(() => {
        alert("User Created Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });

    // signInWithPopup(auth, googleProvider)
    //   .then((response) => {
    //     console.log(response.user);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };

  const getData = (e) => {
    e.preventDefault();
    console.log("Getting Data");
    getDocs(collectionRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    });
  };

  return (
    <div>
      <form action="">
        <div className="m-8 grid-cols-1 grid max-w-4xl">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="m-2 border-2 border-black"
            onChange={handleInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="m-2 border-black border-2"
            onChange={handleInput}
          />
          <button
            type="submit"
            className=" font-black border-2 border-black"
            onClick={getData}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
