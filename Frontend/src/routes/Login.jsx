import { useContext } from "react";
import { useRef } from "react";
import { UserContext } from "../store/user-details-store";
import{useNavigate} from"react-router-dom";
import styles from "./Login.module.css"
const LogIn=()=>{
  //using my context api
  const {updateStore}=useContext(UserContext);
  //using my usenavigate
  const navigate= useNavigate();

  let EmailId=useRef("");
  let Password=useRef("");
   const handleSubmit=async (event)=>{
     event.preventDefault();
    
     fetch("https://ed-cart-b.vercel.app/api/v1/logIn",{
      method:"POST",
      headers:{"Content-Type": "application/json",},
      body:JSON.stringify({
        emailId:EmailId.current.value,
        password:Password.current.value,
      })
     }).then((res)=>{return res.json();})
     .then((data)=>{
      if(!data.success){
        alert(data.message)
      }
      else{
        //update the store and render ui with user Id
        updateStore(data);
        navigate("/")
        alert("Login successfully")
      }
     })
     console.log( EmailId.current.value,Password.current.value);
     EmailId.current.value="";
     Password.current.value="";
   }
  return (
    <center className={styles["log-in"]}>
      <h3>Login</h3>
      <div className={styles["form-element"]}>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Id" ref={EmailId}/>
          <input type="password" placeholder="Password" ref={Password}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </center>
  );
}
export default LogIn;
