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
      submitIsDisabled: true,
    };
  }

  // callback function - will be passed as a prop to child component Hello
  getMessage = (HelloMessage) => {
    this.setState({ message: HelloMessage });
    // document.getElementById("mBox").style.visibility = "visible";
  };

  handleInput = (e) => {
      this.setState({ inputPending: e.target.value });
  };

  saveFeedback = (event) => {
    event.preventDefault();
    let val = this.state.inputPending;
    if (this.state.inputPending) {
      this.setState({ feedback: val, inputPending: "" });
    }
  };
  showFeedback = () => {
    if (this.state.feedback) {
      return <div>{`Feedback: ${this.state.feedback}`}</div>;
    }
  };

  getOS () {
    var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!==-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!==-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!==-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!==-1) OSName="Linux";

 return 'Your OS: '+OSName;
  }
  render() {
    return (
      <div className="container">
        <p className="note">
          <p>{this.getOS()}</p>
          <p>App version: {navigator.appVersion}</p>
          {/* <p>{window.navigator.platform.indexOf('Linux')}</p> */}
          <p>Platform: {window.navigator.platform}</p>
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
              value={this.state.inputPending}
              onChange={this.handleInput}
            ></input>
            <input type="submit" disabled={!this.state.inputPending} value="Send feedback" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
