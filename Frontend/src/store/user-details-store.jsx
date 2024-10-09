import { createContext, useRef } from "react";
import { useState } from "react";

export const UserContext = createContext({
  //using emailId to identify the loggeed in user
  emailId: "",
  handleLoginSignUp: () => {},
  updateStore: () => {},
  wishlist: [],
  setWishlist: () => {},
  cartlist: [],
  setCartlist: () => {},
  myLearning: [],
  setmyLearning:()=>{},
  //for handling score
  section1:"",
  section2:"",
  section3:"",
  section4:"",
  section5:"",
  section6:"",
  section7:"",
  scrollHandler:()=>{}
});

const UserContextProvider = ({ children }) => {
  const [emailId, setId] = useState("");
  const handleLoginSignUp = (emailId) => {
    setId(emailId);
    return;
  };
  // upodate the store
  const updateStore =  (data) => {
    //updating the user id
                          handleLoginSignUp(data.data.emailId);
                          let newwishlist = data.data.wishList;
                          console.log(data);
                          setWishlist([...newwishlist]);
                          let newcartlist = data.data.cartList;
                          setCartlist([...newcartlist]);
                          let newmylearning = data.data.myLearningList;
                          setmyLearning([...newmylearning]);
  };
 
  
  let [myLearning,setmyLearning]=useState([]);
  let [wishlist,setWishlist]=useState([]);
  let [cartlist,setCartlist]=useState([]);
  //for smooth scrolling
  let section1=useRef();
  let section2=useRef();
  let section3=useRef();
  let section4=useRef();
  let section5=useRef();
  let section6=useRef();
  let section7=useRef();
  const scrollHandler=(elementRef)=>{
   
    // console.log(elementRef.current.offsetTop)
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: 'smooth' });
  }
  return (
    <UserContext.Provider
      value={{
        emailId,
        wishlist,
        cartlist,
        myLearning,
        updateStore,
        handleLoginSignUp,
        setCartlist,
        setWishlist,
        setmyLearning,
        scrollHandler,section1,section2,section3,section4,section5,section6,section7,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
