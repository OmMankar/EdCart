import { useContext } from "react";
import { UserContext } from "../store/user-details-store";
import styles from "./PriceCalculation.module.css"
const PriceCalculation=({totOriginalPrice,totDiscountPrice,size})=>{
  let {cartlist,setmyLearning,myLearning,setCartlist,emailId}=useContext(UserContext);
  const payButton= async()=>{
    ///need to resolve this multiple buy  problem of wishlist 
    let newList = [...cartlist];
setmyLearning([...newList,...myLearning]);
/// add all elments to database
const response = await fetch(`http://localhost:3000/api/v1/MyLearninglist/add/${ emailId}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newList), 
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
    
    
    //update the cartlist in db
    const respon = await fetch(`http://localhost:3000/api/v1/Cartlist/delete/all/${ emailId}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
 
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
    alert("Courses added to My Learning")
    setCartlist([])
  }
  return <div className={styles["price-calculation"]}>
    <h3>Total: </h3>
    <div  className={styles["element"]}>No. Of items:{size}</div>
     <div className={styles["element"]}>Subtotal of orignal prices:Rs.{totOriginalPrice}</div>
     <div className={styles["element"]}>Subtotal discounts:Rs.{totOriginalPrice-totDiscountPrice}</div>
    <div className={styles["element"]}>Payment Amount:Rs.{totDiscountPrice}</div>
    <div  className={styles["pay-button"]}><button onClick={payButton}>Proceed to Buy</button></div>
    
  </div>
}
export default PriceCalculation;