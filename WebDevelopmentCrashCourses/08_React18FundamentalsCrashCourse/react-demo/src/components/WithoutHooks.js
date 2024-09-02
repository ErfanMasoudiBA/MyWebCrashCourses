import React, { Component } from 'react';

class CounterWithoutHooks extends Component {
  // Initial state in a class component
  state = {
    count: 0
  };

  // Method to increment the counter
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Method to decrement the counter
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterWithoutHooks;
