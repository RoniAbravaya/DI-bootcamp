import React, { Component } from 'react';

class BuggyCounter extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));

    if (this.state.counter === 4) {
      throw new Error('I crashed!');
    }
  };

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>{this.state.counter}</h2>
      </div>
    );
  }
}

export default BuggyCounter;
