import { useContext } from "react";
import CourseCardlistContext from "../store/Courses-cards-store";
import Card from "./Card";
import styles from "./Category.module.css";

const Category = ({ categoryType,curFetchingStatus, CourseCardList,section }) => {
  // const { curFetchingStatus, CourseCardList } = useContext(CourseCardlistContext);

  if (curFetchingStatus) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  const filteredCards = CourseCardList.filter((card) => card.category === categoryType);
  

  return (
   
    <div ref={section} style={{ paddingTop: '50px' }}>
      <h1>{ categoryType}</h1>
      <div className={styles["container-items"]}>
        
        {filteredCards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
     
  );
};

export default Category;
