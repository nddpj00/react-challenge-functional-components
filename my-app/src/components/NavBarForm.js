import React from "react";
import css from "./css/NavBarForm.module.css";

class NavBarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      buttonText: "Login",
    };
  }

  handleClick() {
    this.setState(
      {
        isLoggedIn: this.state.isLoggedIn === true ? false : true,
        buttonText: this.state.buttonText === "log in" ? "log out" : "log in",
      },
      () => {
        console.log("new state isLogged in:", this.state.isLoggedIn);
        console.log("new state buttontext:", this.state.buttonText);
      }
    );
  }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
          <button onClick={() => this.handleClick()}>
            {this.state.buttonText}
          </button>
        ) : (
          <form>
            <label>Username:</label>
            <input></input>
            <label>Password:</label>
            <input></input>
            <button onClick={() => this.handleClick()}>
              {this.state.buttonText}
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default NavBarForm;
