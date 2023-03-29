import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, guest",
      buttonText: "log in",
    };
  }

  handleClick() {
    this.setState(
      {
        message:
          this.state.message === "Hello, guest"
            ? "Welcome back, user!"
            : "Hello, guest",
        buttonText: this.state.buttonText === "log in" ? "log out" : "log in",
      },
      () => {
        console.log("new state", this.state.message);
        console.log("new state", this.state.buttonText);
      }
    );
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <span>{this.state.message}</span>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default NavBarSimple;
