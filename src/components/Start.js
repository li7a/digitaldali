import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Start extends Component {
  render() {
    return (
      <div className="start-div">
        <h1 className="chat-name"> Chat </h1>
        <div className="logindiv">
          <form className="loginform" onSubmit={
            (event) => {
              event.preventDefault();
              const text = event.target.username.value;
              if (!text) return;
              this.props.onLogin(text);
              this.props.history.push("/chat");
            }
          }>
            <div>
              <label>username</label>
              <input type="text"
                placeholder="Введите имя пользователя"
                name="username"
              >
              </input>
            </div>
            <button className="btnstart"> Войти </button>
          </form>
        </div>
      </div>);
  }
}

export default withRouter(Start);