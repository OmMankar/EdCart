import React, { useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../store/user-details-store";
import styles from "./SignUp.module.css";
import {useNavigate} from "react-router-dom"


const SignUp = () => {

  const {updateStore}=useContext(UserContext);
  const navigate= useNavigate();
  const name = useRef("");
  const emailId = useRef("");
  const password = useRef("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("https://ed-cart-b.vercel.app/api/v1/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        emailId: emailId.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          alert(data.message);
          
        } else {
          // handle successful signup
          updateStore(data);
          navigate("/")
          alert(data.message);
        }
      });

    name.current.value = "";
    emailId.current.value = "";
    password.current.value = "";
  };

  return (
    <center className={styles["sign-up"]}>
      <h3>SignUp</h3>
      <div className={styles["form-element"]}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" ref={name} />
          <input type="email" placeholder="Email Id" ref={emailId} />
          <input type="password" placeholder="Password" ref={password} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </center>
  );
};

export default SignUp;
