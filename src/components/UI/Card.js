import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;

///in line 5 props.className is added because if we add a clasName to the custom component like card in add user it wont understand,So to make it understand we need to define the className or any name in the Card component.
