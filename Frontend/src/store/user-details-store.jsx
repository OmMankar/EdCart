import { createContext } from "react";
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
  setmyLearning:()=>{}
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
