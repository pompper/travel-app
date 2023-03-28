import React from 'react'
import styles from "./user_panel.module.css";
import Button from '../../../components/button/Button';

const User_panel = ({url}) => {
  return (
    <div className={styles.user_panel}>
      <div className={styles.flex_item}>
        <div className={styles.avatar} style={{ backgroundImage: `url("${url})"`, backgroundSize: "cover" }}>
          
        </div>
      </div>

      <div className={styles.flex_item}>
        <div className={styles.profile_btn}>
          <Button height={35}>
            <p style={{ color: "white" }}>Profile</p>
          </Button>
        </div>
      </div>

      <div className={styles.flex_item}>
        <div className={styles.client_dropdown}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default User_panel