import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Start extends Component {
  render() {
    return (
      <div>
        <h1> Start </h1>
        <form onSubmit={
          (event) => {
            this.props.onLogin(event);
            this.props.history.push("/chat");
          }
        }>
          <input type="text"
            placeholder="Введите имя пользователя"
            name="username"
          >
          </input>
          <br />
          <button> Войти </button>
        </form>
      </div>);
  }
}

export default withRouter(Start);