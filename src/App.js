import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Start from "./components/Start";
import Chat from "./components/Chat";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "gjhfgjf"
    };
  }

  onUsernameChange = event => {
    event.preventDefault();
    const text = event.target.username.value;
    this.setState({ username: text });

  }
  render() {
    return (
      <Switch>
        <Route path="/chat" component={() => <Chat username={this.state.username} />} />
        <Route path="/" component={() => <Start onLogin={this.onUsernameChange} />} />
      </Switch>
    );
  }
}

export default App;
