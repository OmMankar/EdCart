import Card from "../components/Card";
import styles from "./CartCards.module.css";
import PriceCalculation from "../components/PriceCalculation";
import { useContext,useState } from "react";
import { UserContext } from "../store/user-details-store";

const CartCards = () => {
  const { cartlist } = useContext(UserContext);
  let totOriginalPrice=0;
 let totDiscountPrice=0;;


  return (
    <>
      {/* yet to write the condition for empty cart */}
      {cartlist.length === 0 && (
        <h4 className={styles["emptyList"]}>
          Your cart is empty. Keep shopping to find a course!
        </h4>
      )}
      <div className={styles["cart-item"]}>
        <div className={styles["container-items"]}>
          {/* card should which are present in our cartlist */}
          {cartlist.map((card) => {
            totOriginalPrice=totOriginalPrice+Number(card.originalPrice);
            totDiscountPrice=totDiscountPrice+Number(card.discountPrice);
            return <><Card key={card.id} {...card}></Card></>;

          }
            
          )}
        </div>
        <div>
          {cartlist.length !== 0 && <PriceCalculation totOriginalPrice={totOriginalPrice} totDiscountPrice={totDiscountPrice} size={cartlist.length}></PriceCalculation>}
        </div>
      </div>
    </>
  );
};
export default CartCards;
