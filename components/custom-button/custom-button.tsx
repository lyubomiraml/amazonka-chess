import React from "react";
import styles from "./custom-button.module.scss";

import "./custom-button.module.scss";

const CustomButton = ({ children, className, ...otherProps }) => (
  <button
    className={className ? styles[className] : styles.custom_btn}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
