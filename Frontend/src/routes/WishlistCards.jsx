import { useContext } from "react";
import Card from "../components/Card";
import { UserContext } from "../store/user-details-store";
import styles from "./WishlistCards.module.css"

const WishlistCards=()=>{
  //when no cards in wishlist 
  const {wishlist}=useContext(UserContext);
  
  return<>
  { wishlist.length===0 &&<h4 className={styles['emptyList']}>Your wishlist is a roadmap to your dreams. Fill it with aspirations, and let each item be a step towards your goals.</h4>}
  

  <div className={styles["container-items"]}>
    {/* card should which are present in our whislist */}
    {wishlist.map(card=> <Card key={card.id} {...card} ></Card>)}
    
  </div>

</>

  ;
}
export default WishlistCards;