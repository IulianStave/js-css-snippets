import React from 'react';

// export default ({ name, age }) => <h1>From Hello.js <br/> Hello {name} - you are {age} years old!</h1>;
class Hello extends React.Component {
  state = {
    childSignal: "This is the child talking to parent",
    toggled: true
  };
send = () => {
  this.props.callbackFP(this.state.childSignal);
};

toggle = () => {
  this.setState({toggled: !this.state.toggled});
  const v = document.getElementById('mBox');
  v.style.visibility=!this.state.toggled? 'visible':'hidden';

}
render() {
  let styleToggle = this.state.toggled? "onToggle":"offToggle";
  return (
    <div>
     <button className="sendButton" onClick={this.send}>Send now the message</button>
     <div>
     <button className={`toggleButton ${styleToggle}`} onClick={this.toggle}>
       {this.state.toggled? "ON":"OFF"}</button>
    </div>
    </div>
    );
}
};

export default Hello;
