import React from "react";
import logoImage from "../../assets/logo.png";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <img
          src={logoImage}
          className={classes.logo}
          alt="A table full of delicious food"
        />

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food !" />
      </div>
    </React.Fragment>
  );
}
