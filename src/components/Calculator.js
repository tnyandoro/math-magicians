/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import calculate from '../logic/calculate';
import operate from '../logic/operate';
import styles from '../assets/calculator.module.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (buttonName) => {
    this.setState((prevState) => calculate(prevState, buttonName));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className={`${styles.Calculator}`}>
        <Display output={total} operation={operation} next={next} />
        <Keypad onClickHandler={this.onClickHandler} />
      </div>
    );
  }
}

export default Calculator;
