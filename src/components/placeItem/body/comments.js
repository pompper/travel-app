import React,{ useContext, useState } from 'react';
import FormInput from '../../../components/formInput';
import submitCommentLogo from "../../../assets/comments.png";
import styles from "./comments.module.css";
import commentsLogo from "../../../assets/comments.png";
import Like from '../../../components/Ratings/like';


const Comments = ({item}) => {

  const [commentValue, setCommentValue] = useState(null);


  const onCommentSubmitHandler = async() => {
    console.log("create_new_comment")
  }

  const DUMMY_DATA = [
    {
      avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Squint&eyebrowType=RaisedExcited&mouthType=ScreamOpen&skinColor=DarkBrown",
      conten: "obs fill your pockets, adventures fill your soul."
    },

    {
      avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Blank&hairColor=Platinum&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray02&eyeType=Close&eyebrowType=Angry&mouthType=Grimace&skinColor=Black",
      conten: "Remember that happiness is a way of travel"
    },

    {
      avatar: "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=White&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Smile&skinColor=Tanned",
      conten: "Travel is the only thing you buy"
    }
  ]


  return (
    <div className={styles.container}>
      <div className={styles.comments_list}>
        {DUMMY_DATA.map(comment => (
          <div className={styles.comment_item}>
            <img src={comment.avatar} alt="avatar" />
            {comment.conten}
          </div>
        ))}
      </div>

      <div style={{ color: "rgba(240, 175, 115, 1)", fontSize: "1.3rem" }}>View all comment</div>

      <div className={styles.controll_panel}>
        <FormInput name="Add a comment..." value={commentValue} isValid={true} no_errors={true} onChange={(val)=>{setCommentValue(val)}} />
        <img src={commentsLogo} alt="" onClick={onCommentSubmitHandler} />
      </div>
    </div>
  )
}

export default Comments