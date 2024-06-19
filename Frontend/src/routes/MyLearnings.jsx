import { useContext } from "react";
import Card from "../components/Card";
import { UserContext } from "../store/user-details-store";
import styles from "./WishlistCards.module.css"

const Mylearnings=()=>{
  //when no cards in wishlist 
  const {myLearning}=useContext(UserContext);
  return<>
  { myLearning.length===0 &&<h4 className={styles['emptyList']}>Learn and Earn</h4>}
  

  <div className={styles["container-items"]}>
    {/* card should which are present in our whislist */}
    {myLearning.map(card=> <Card key={card.id} {...card} ></Card>)}
    
  </div>

</>

  ;
}
export default Mylearnings;