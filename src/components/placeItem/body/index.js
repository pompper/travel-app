import styles from "./body.module.css";
import { useState } from 'react';
import UserPanel from "./user_panel";
import Details from "./details";
import Comments from "./comments";
import Controllers from "./controllers";


const Body = ({item}) => {
  
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(item.likes ? item.likes.length : 0);
  const [showDescription, setShowDescription] = useState(true);

  const onLikeClickHandler = () => {
    setLikesCount(!isLiked ? likesCount + 1 : likesCount - 1);
    setIsLiked(!isLiked)
  }


  return (
    <div className={styles.container}>

      <UserPanel url={item.user_id.avatar} />

      <div className={styles.body}>

        <Details item={item} />

        <Comments item={item} />

        <Controllers 
          pid={item._id} 
          isLiked={isLiked}
          onLike={onLikeClickHandler} 
          padding={0}
          likes={likesCount} 
          timeline={true}
        />
       
      </div>


    </div>
  )
}

export default Body