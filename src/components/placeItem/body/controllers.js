import React, {useState} from 'react'
import styles from "./controllers.module.css";
import Like from '../../../components/Ratings/like';
import commentsLogo from "../../../assets/comments_logo.png";



const Controllers = (props) => {

    console.log("props: ", props)

    return (
        <div style={{ padding: props.padding }} className={styles.container}>

            { ((props.onLike || props.onComment) && props.pid) &&
                <div className={props.onComment ? styles.like_comment_icons : styles.like_icon}>
                    { props.onLike &&
                        <div className={styles.like_icon}>
                            <Like pid={props.pid} count={2} onClick={props.onLike} isLiked={props.isLiked}/>
                        </div>
                    }

                    { props.onComment &&
                        <div className={styles.comment_icon}>
                            <img onClick={props.onComment} className={styles.comments_logo} src={commentsLogo} alt="" />
                        </div>
                    }
                </div>
            }


            {   props.likes && 
                <div className={styles.likes}>
                    <p>
                        {
                        props.likes && ( props.likes > 1 ? `${props.likes} likes` : `${props.likes} like` )
                        }
                    </p>
                </div>
            }

            {   props.timeline && 
                <div className={styles.likes}>
                    <p>
                        2 mins ago
                    </p>
                </div>
            }

        </div>
    )
}

export default Controllers