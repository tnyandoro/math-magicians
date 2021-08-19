/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import calculate from '../logic/calculate';
import styles from '../assets/calculator.module.css';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = (buttonName) => {
    setState({ ...state, ...calculate(state, buttonName) });
  };

  const { total, next, operation } = state;

  return (
    <div className={`${styles.Calculator}`}>
      <Display output={total} operation={operation} next={next} />
      <Keypad onClickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
