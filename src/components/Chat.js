import React, { Component } from "react";
import { Redirect } from "react-router";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        "Сообщение1",
        "Сообщение2"],
      text: ""
    };
  }
  onTextChange = (event) => {
    const text = event.target.value;
    this.setState({ text: text });
  }
  onSent = () => {
    if (!this.state.text) return;
    const newMessages = [...this.state.messages, this.state.text];
    this.setState({ messages: newMessages, text: "" });
  }
  onEnter = (event) => {
    if (event.key === "Enter")
      this.onSent();
  }
  render() {
    if (!this.props.username)
      return (<Redirect to="/" />);
    const msg = this.state.messages.map(
      (el, index) => {
        return (
          <div className="msg" key={index}>
            <p>{el}</p>
            <p><em>{this.props.username}</em></p>
          </div>
        )
      }
    );
    return (
      <div className="main-div">
        <h1 className="header"> Тестовое задание </h1>
        <div className="msgbox">
          {msg}
        </div>
        <div className="footer">
          <input onKeyPress={this.onEnter} className="windowmsg" type="text" placeholder="Введите сообщение" value={this.state.text} onChange={this.onTextChange}></input>
          <br />
          <button className="sentbtn" onClick={this.onSent}>></button>
        </div>
      </div>
    );
  }
}

export default Chat;