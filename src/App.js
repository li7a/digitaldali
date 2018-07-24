import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Start from "./components/Start";
import Chat from "./components/Chat";
import NotFound from "./components/404"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  onUsernameChange = text => {
    this.setState({ username: text });

  }
  render() {
    return (
      <Switch>
        <Route exact path="/chat" component={() => <Chat username={this.state.username} />} />
        <Route exact path="/" component={() => <Start onLogin={this.onUsernameChange} />} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
