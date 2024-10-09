// import CourseCardlistContext from "../store/Courses-cards-store";
import { useContext, useEffect, useState,usesection } from "react";
import Category from "../components/Category";
import { UserContext } from "../store/user-details-store";

const CoursesCards=()=>{
 
  const INITIAL_VALUE = [];

  const [CourseCardList, setCardList] = useState(INITIAL_VALUE);
  const [curFetchingStatus,setStatus]=useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setStatus(true);
    fetch("https://ed-cart-b.vercel.app/api/v1/",{signal}).then((res)=>{
      
      return res.json();
    })
    .then((data) => {
      setCardList(data.data);
      setStatus(false);
      
    });
    
    return () => {
      controller.abort();
    };
    
  }, []);
  //for smooth scroling
  let {section1,section2,section3,section4,section5, section6,section7}=useContext(UserContext);
  
  return <>
 
  <Category categoryType={"Information Technology"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus} section={section1}/>
  <Category categoryType={"Business"}  CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus} section={section2}/>
  <Category categoryType={"Finance"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus} section={section3}/>
  <Category categoryType={"Personal Developement"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus}  section={section4}/>
  <Category categoryType={"Design"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus} section={section5}/>
  <Category categoryType={"Health And Fitness"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus} section={section6}/>
  <Category categoryType={"Marketing"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus} section={section7}/>
 
  

  </>;
}

export default CoursesCards;
