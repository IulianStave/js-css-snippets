import React from 'react';

// export default ({ name, age }) => <h1>From Hello.js <br/> Hello {name} - you are {age} years old!</h1>;
class Hello extends React.Component {
  state = {
    childSignal: "This is the child talking to parent",
    toggled: false
  };
send = () => {
  this.props.callbackFP(this.state.childSignal);
  const v = document.getElementById('mBox');
  v.style.visibility='visible';
}

toggle = () => {
  this.setState({toggled: !this.state.toggled})
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
