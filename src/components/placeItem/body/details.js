import React from 'react'
import Button from '../../../components/button/Button'
import styles from "./details.module.css"
import map_icon from "../../../assets/map_icon.png";


const Details = (props) => {
  return (
    <div className={styles.container}>
      {props.item.description}

      <div className={styles.map}>
        <Button color={"#d9d9d9"} height={35} onSubmit={props.onSubmit}>
          <div className={styles.map_content}>
            <img src={map_icon} alt="" />
            <p style={{ color: "#EE7D15" }}>Map</p>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Details