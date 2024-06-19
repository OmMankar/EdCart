import { Outlet } from "react-router-dom";
import CartCards from "../routes/CartCards";
import CoursesCards from "../routes/CoursesCards";
import WishlistCards from "../routes/WishlistCards";

const Body=()=>{
  return <>
  {/* {bodyDisplay==="coursesCards" &&<CoursesCards></CoursesCards>}
  {bodyDisplay==="wishlistCards" && <WishlistCards></WishlistCards>}
  {bodyDisplay==="cartCards" && <CartCards></CartCards>} */}
  <Outlet></Outlet>
  </>;
}
export default Body;