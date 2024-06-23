import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../store/user-details-store";
import styles from "./Card.module.css";
const Card = (item) => {
  const location = useLocation();

  let {
    wishlist,
    setWishlist,
    cartlist,
    setCartlist,
    emailId,
    setmyLearning,
    myLearning,
  } = useContext(UserContext);

  const handlewishlist = async (item) => {
    if (!emailId) {
      return alert("Welcome! Log in to your account or join us by signing up.");
    }

    //check whteralready bought the course
    console.log(myLearning)
    if(myLearning.includes(item)){
      return alert("Course Already present in My Learning")
    }

    console.log(cartlist)

    //Already present wishlist
    if(wishlist.includes(item)){
      return alert("Course Already present in WishList")
    }
    //to check wheteher already the card is present in the wishList.
    if (!wishlist.includes(item)) {
      setWishlist([item, ...wishlist]);
      //on can of our wishlist element
      const response = await fetch(
        `https://ed-cart-b.vercel.app/api/v1/Wishlist/${emailId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
    }
    return alert("Added to Wishlist.");
  };
  const handlecart = async (item) => {
    //when user is not logg into his account and ussing wishlist and buy button
    if (!emailId) {
      return alert("Welcome! Log in to your account or join us by signing up.");
    }
    //check whteralready bought the course
    if(myLearning.includes(item)){
      return alert("Course Already present in My Learning")
    }
   //to check wheteher already the card is present in the cartlist.
    if (!cartlist.includes(item)) {
      setCartlist([item, ...cartlist]);
      const response = await fetch(
        `https://ed-cart-b.vercel.app/api/v1/Cartlist/${emailId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
    }
    
    return  alert("Added to Cart.");
    
  };
  const DeleteButton = async (item) => {
    let filteredCart = [];
    let id = item._id;
    //when cards are rendered in cartList

    if (location.pathname === "/Cart") {
      filteredCart = cartlist.filter((card) => card._id !== id);
      setCartlist(filteredCart);
      const response = await fetch(
        `https://ed-cart-b.vercel.app/api/v1/Cartlist/delete/${emailId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item), // Include body if necessary, otherwise omit this line
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    }

    //when cards rendered in wishlist components

    if (location.pathname === "/Wishlist") {
      filteredCart = wishlist.filter((card) => card._id !== id);
      setWishlist(filteredCart);

      const response = await fetch(
        `https://ed-cart-b.vercel.app/api/v1/Wishlist/delete/${emailId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    }

    //when cards getting rendered in my learning

    if (location.pathname === "/myLearning") {
      //remove the selected card
      filteredCart = myLearning.filter((item) => item._id !== id);
      // update the use state for rendering to occur
      setmyLearning(filteredCart);
      //upadte the data base
      const response = await fetch(
        `https://ed-cart-b.vercel.app/api/v1/MyLearninglist/delete/${emailId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <div className={styles["item-inside"]}>
      {location.pathname !== "/" && (
        <button
          className={styles["delete"]}
          onClick={() => {
            DeleteButton(item);
          }}
        >
          X
        </button>
      )}
      <div className={styles["image"]}>
        {" "}
        <img src={item.image} alt={item.courseName} />
      </div>
      <div className={styles["course-name"]}>{item.courseName}</div>
      <div className={styles["course-author"]}>{item.courseAuthor}</div>
      <div className={styles["rating"]}>
        <div className={styles["rating-number"]}>{item.ratingNumber}</div>
        <div className={styles["num-of-ratings"]}>{item.numOfRatings}</div>
        {location.pathname === "/" && (
          <button
            onClick={() => {
              handlewishlist(item);
             
            }}
          >
            Wishlist
          </button>
        )}
      </div>
      <div className={styles["price"]}>
        <div className={styles["discount-price"]}>Rs{item.discountPrice}</div>
        <div className={styles["original-price"]}>Rs{item.originalPrice}</div>
        {location.pathname === "/" && (
          <button
            onClick={() => {
              handlecart(item);
              
            }}
          >
            Buy
          </button>
        )}
      </div>
    </div>
  );
};
export default Card;
