// import CourseCardlistContext from "../store/Courses-cards-store";
import { useEffect, useState } from "react";
import Category from "../components/Category";

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

  return <>
  {/* <CourseCardlistContext> */}
  <Category categoryType={"Information Technology"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus}/>
  <Category categoryType={"Business"}  CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus}/>
  <Category categoryType={"Finance"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus}/>
  <Category categoryType={"Personal Developement"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus}/>
  <Category categoryType={"Design"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus}/>
  <Category categoryType={"Health And Fitness"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus}/>
  <Category categoryType={"Marketing"} CourseCardList={CourseCardList} curFetchingStatus={curFetchingStatus}/>
  {/* </CourseCardlistContext> */}
  

  </>;
}

export default CoursesCards;
