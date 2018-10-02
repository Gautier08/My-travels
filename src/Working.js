import React, { Component } from 'react';

class Working extends Component {
    render() {
    const light = this.state.on ? 'Work' : 'Break';
    return (
      <div className="">
        <button onClick={this.handleClick}
        className={light}
        >
        {light.toUpperCase()}
        </button>
      </div>
    );
  }
}

export default Working;
