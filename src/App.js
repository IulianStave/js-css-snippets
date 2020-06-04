import React, { Component } from "react";
import Hello from "./Hello";
// import "./style.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "",
      feedback: "",
      iputPending: "",
    };
  }

  // callback function - will be passed as a prop to child component Hello
  getMessage = (HelloMessage) => {
    this.setState({ message: HelloMessage });
    document.getElementById("mBox").style.visibility = "visible";
  };

  handleInput = (e) => {
    this.setState({ inputPending: e.target.value });
  };

  saveFeedback = (event) => {
    event.preventDefault();
    let val = this.state.inputPending;
    this.setState({ feedback: val, inputPending: "" });
  };
  showFeedback = () => {
    if (this.state.feedback) {
      return <div>{`Feedback: ${this.state.feedback} Thanks`}</div>;
    }
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
          <p>{this.state.message ? this.state.message : " "}</p>
          <p>{this.showFeedback()}</p>
        </div>
        <div>
          <form onSubmit={this.saveFeedback}>
            <label htmlFor="feedback">Does it work?&nbsp;</label>
            <input
              id="feedback"
              type="text"
              onChange={this.handleInput}
            ></input>
            <input type="submit" value="Send feedback" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
