/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import styles from '../assets/calculator.module.css';

class Calculator extends Component {
  render() {
    return (
      <div className={`${styles.Calculator}`}>
        <Display output={0} />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
