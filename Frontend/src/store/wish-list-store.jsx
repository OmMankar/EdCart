import { createContext, useReducer,  } from "react";

const WishlistContext=createContext({
                                      wishlistCardList:[],
                                      deleteWishlistCard:()=>{},
                                    });

        
export const wishlistReducer=(curWishlist,action)=>{
  let newWishlist=curWishlist;
  if(action.type==="REMOVE_CARD"){
    newWishlist=curWishlist.filter(Card=>Card.Id!==action.payload.CardId)
  }
  return newWishlist;
}                                    
  const  WishlistContextProvider=({children})=>{
  const INITIAL_VALUE=[];
      const [wishlistCardList, dispatchWishistCards] = useReducer(
        wishlistReducer,
        INITIAL_VALUE
      );
    const deleteWishlistCard=(CardId)=>{
      dispatchWishistCards({
        type:"REMOVE_CARD",
        payload:{
          CardId,
        }
      })
    }

    return  <WishlistContext.Provider value={{wishlistCardList,deleteWishlistCard}}>
      {children}
    </WishlistContext.Provider>
}                               

export default WishlistContextProvider;