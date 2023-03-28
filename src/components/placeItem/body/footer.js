import React from 'react'
import styles from "./footer.module.css";


const Footer = (props) => {


  return (
    <div className={styles.footer}>
        {props.children}
    </div>
  )
}

export default Footer