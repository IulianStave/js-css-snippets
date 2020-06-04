import React, { Component } from "react";
import Hello from "./Hello";
// import "./style.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  // callback function - will be passed as a prop to child component Hello
  getMessage = (HelloMessage) => {
    this.setState({ message: HelloMessage });
    document.getElementById("mBox").style.visibility = "visible";
  };

  render() {
    return (
      <div className="container">
        <p className="note">
          {" "}
          The message box from below will be updated as soon as the message is
          sent by Hello
        </p>
        <Hello callbackFP={this.getMessage} />
        {/* <div>{this.state.message === "initial" ? "" : this.state.message}</div> */}
        <div id="mBox" className="messageBox fade">
          <p>
            {this.state.message ? this.state.message : " "}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
