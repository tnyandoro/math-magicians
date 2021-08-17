/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/display.module.css';

class Display extends Component {
  render() {
    const { output } = this.props;
    return (
      <div className={`${styles.Display}`}>
        <p>{output}</p>
      </div>
    );
  }
}

Display.propTypes = {
  output: PropTypes.number.isRequired,
};

export default Display;
