/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/display.module.css';

class Display extends Component {
  render() {
    const { output, operation, next } = this.props;
    return (
      <div className={`${styles.Display}`}>
        <p>{output || '0'}</p>
        <p>{operation || null}</p>
        <p>{next}</p>
      </div>
    );
  }
}

Display.propTypes = {
  output: PropTypes.number,
  operation: PropTypes.number,
  next: PropTypes.number,
};

Display.defaultProps = {
  output: '',
  operation: '',
  next: '',
};

export default Display;
