import React, { Component } from 'react';

class LifecycleComponent extends Component {
  state = {
    color: 'yellow'
  };

  static getDerivedStateFromProps(props, state) {
    return { color: props.color };
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  render() {
    return (
      <div>
        <h2>{this.state.color}1</h2>
      </div>
    );
  }
}

export default LifecycleComponent;
