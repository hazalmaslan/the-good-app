import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent'

class App extends Component {
  state = {
    value: 0,
  }

  increment = () => {
    this.setState({value: this.state.value + 1})
  }

  decrement = () => {
    this.setState({value: this.state.value - 1})
  }

  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <NewComponent name="Hazal"/>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default App;
