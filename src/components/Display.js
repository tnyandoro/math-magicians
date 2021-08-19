/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/display.module.css';

class Display extends Component {
  render() {
    const { output, operation, next } = this.props;
    return (
      <div className={`${styles.Display}`}>
        <p>{output || null}</p>
        <p>{operation || null}</p>
        <p>{output || operation || next ? next : '0'}</p>
      </div>
    );
  }
}

Display.propTypes = {
  output: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  output: '',
  operation: '',
  next: '',
};

export default Display;
