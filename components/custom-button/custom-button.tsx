import React from "react";
import styles from "./custom-button.module.scss";

import "./custom-button.module.scss";

const CustomButton = ({ children, className, href, ...otherProps }) => (
  <a
    href={href}
    className={className ? styles[className] : styles.custom_btn}
    {...otherProps}
  >
    {children}
  </a>
);

export default CustomButton;
