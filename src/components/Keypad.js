import React, { Component } from 'react';
import Button from './Button';

class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'keypad' };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="keypad">
        <div className="group">
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="÷" />
        </div>
        <div className="group">
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="X" />
        </div>
        <div className="group">
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" />
        </div>
        <div className="group">
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="+" />
        </div>
        <div className="group">
          <Button name="0" />
          <Button name="." />
          <Button name="=" />
        </div>

      </div>
    );
  }
}

export default Keypad;
