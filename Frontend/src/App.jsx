import NavigationBar from "./components/NavigationBar";
import FooterBar from "./components/FooterBar";
import Body from "./components/Body";
// import { useState } from "react";
import UserContextProvider from "./store/user-details-store";

function App() {
  // const [bodyDisplay,setBodyDisplay]=useState("coursesCards");
  // const handleBodyDisplay=(toDisplay)=>{
  //   console.log(toDisplay);
  //   setBodyDisplay(toDisplay);
  // }

  return (
    <>
    <UserContextProvider>
      <NavigationBar /*handleBodyDisplay={handleBodyDisplay}*/ />
      <Body /*bodyDisplay={bodyDisplay}*/ />
      <FooterBar/>
      </UserContextProvider>
    </>
  );
}

export default App;
