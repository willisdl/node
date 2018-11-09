import React, { Component } from 'react';
import UserOut from './UserOutput/UserOutput.js';
import UserIn from './UserInput/UserInput.js'
import './App.css';



class App extends Component {
  state = {
    username: 'gxdlw01'
  }
  
  textChange = (event) =>{
    this.setState({
      username: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Input username here: <UserIn username={this.state.username} changed={this.textChange}/></h1>
        <h1>Here's my output</h1>
        <p><UserOut paraOne='This is the first paragraph.' username={this.state.username}/></p>
        <p><UserOut paraOne='This is the second paragraph.' username={this.state.username}/></p>
      </div>
      
    );
  }
}

export default App;