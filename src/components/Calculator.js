import React, { Component } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "math-magicians" };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="Calculator">
        <h1>{name}</h1>
      </div>
    );
  }
}

export default Calculator;
