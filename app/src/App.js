import React, { Component } from 'react';
import './App.css';


class Time extends Component{
  render(){
    var d = new Date();
    return <h2>The Current Time is: {d.toLocaleTimeString()}</h2>
  }
}
class Greeting extends Component{
  render(){
    return <h1>Hello, my name is {this.props.name}. Welcome to my first React App!</h1>
  }
}
class TimeButton extends Component{
  render(props){
    return <button onClick={this.props.showTime}>Display Current Time</button>
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }
  showTime=()=>this.setState({visible: !this.state.visible});

  render() {
    return (
      <div className="App">
        <Greeting name="Ethan"/>
        <TimeButton showTime={this.showTime.bind(this)}/>
        {
          this.state.visible
          &&
        <Time/>

        }
      </div>
      
    );
  }
}

export default App;
