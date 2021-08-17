import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { output: 0 };
  }

  render() {
    const { output } = this.state;
    return (
      <div className="display">
        <p>{output}</p>
      </div>
    );
  }
}

export default Display;
