import { createContext, useEffect, useState } from "react";

const CourseCardlistContext = createContext({ CourseCardList: [] ,
  curFetchingStatus:false});

export const CourseCardsContextProvider = ({ children }) => {

  const INITIAL_VALUE = [];

  const [CourseCardList, setCardList] = useState(INITIAL_VALUE);
  const [curFetchingStatus,setStatus]=useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setStatus(true);
    fetch("http://localhost:3000/api/v1/",{signal}).then((res)=>{
      
      return res.json();
    })
    .then((data) => {
      setCardList(data.data);
      setStatus(false);
      console.log( data);
    });
    
    return () => {
      controller.abort();
    };
    
  }, []);

  return (
    <CourseCardlistContext.Provider value={{ CourseCardList,curFetchingStatus }}>
      {children}
    </CourseCardlistContext.Provider>
  );
};

export default CourseCardlistContext;