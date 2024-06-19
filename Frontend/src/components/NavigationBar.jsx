import styles from "./NavigationBar.module.css";
import { GrSearch } from "react-icons/gr";
// import { RiHeart3Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../store/user-details-store";

// import { FaRegBell } from "react-icons/fa";
const NavigationBar = () => {

  const {emailId ,setWishlist,setCartlist,handleLoginSignUp}=useContext(UserContext);
  return (
    <nav>
      <div className={styles.upper_nav_bar}>
        <div className={styles.udemy_logo} /*onClick={()=>{handleBodyDisplay("coursesCards")}}*/>
          <Link to="/">
            <img src="/logo-.png" alt="Website logo" />
          </Link>
        </div>
        <div className={styles.category}/*onClick={()=>{handleBodyDisplay("coursesCards")}*/>
          <Link to="/" title=" Scroll Down :)  **Information Technology  **Business  **Finance **Personal Developement  **Design  **Health And Fitness  **Marketing">Categories</Link>
          
        </div>
        <div className={styles.search_item}>
          <GrSearch className={styles.search_item_icon} />
          <input type="text" placeholder="Search Here" />
        </div>

      
        <div className={styles.my_learning}/*onClick={()=>{handleBodyDisplay("coursesCards")}*/>
          <Link to="/myLearning">My learning</Link>
        </div>
        <div className={styles.wishlist_item}/*onClick={()=>{handleBodyDisplay("wishlistCards")}*/>
          <Link to="/Wishlist">
            {/* <RiHeart3Line className={styles.wishlist_item_icon} /> */}
            WishList
          </Link>
        </div>
        <div className={styles.cart_item} title="Cart">
          <Link to="/Cart" >
            <AiOutlineShoppingCart className={styles.cart_item_icon} />
          </Link>
        </div>
        {emailId==="" &&
        <div className={styles.user_information}>
          <Link to="/logIn">LogIn</Link>
        </div>}
        {emailId==="" && <div className={styles.user_information}>
          <Link to="/signUp">SignUp</Link>
        </div>}
       
         {emailId!=="" &&  <div >
          {emailId}
        </div>}
        {emailId!=="" &&  <div className={styles.user_information} onClick={()=>{handleLoginSignUp("");setCartlist([]);setWishlist([]);alert("Successfully Logged out")}}>
          Logout
        </div>}
      </div>
      <hr />
    </nav>
  );
};
export default NavigationBar;
