import React, { Component } from "react";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        "fghfgh",
        "gfhfgjghjhfjfjfj651651"],
      text: ""
    };
  }
  onTextChange = (event) => {
    const text = event.target.value;
    this.setState({ text: text });
  }
  onSent = () => {
    const newMessages = [...this.state.messages, this.state.text];
    this.setState({ messages: newMessages, text: "" });
  }
  render() {
    const msg = this.state.messages.map(
      (el, index) => {
        return (
          <div key={index}>
            <p>{el}</p>
            <p><em>{this.props.username}</em></p>
          </div>
        )
      }
    );
    return (
      <div>
        <h1> Chat </h1>
        <input type="text" placeholder="Введите сообщение" value={this.state.text} onChange={this.onTextChange}></input>
        <br />
        <button onClick={this.onSent}>Отправить</button>
        {msg}
      </div>
    );
  }
}

export default Chat;