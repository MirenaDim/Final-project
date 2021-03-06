import React from "react";
import styles from "./MenuToggleButton.module.css";
const menuToggleButton = props => {
  return (
    <button className={styles.toggleButton} onClick={props.onClick}>
      All Offers
    </button>
  );
};

export default menuToggleButton;
