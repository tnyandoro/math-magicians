/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  render() {
    const { output } = this.props;
    return (
      <div className={`${styles.Dsiplay}`}>
        <p>{output}</p>
      </div>
    );
  }
}

Display.propTypes = {
  output: PropTypes.number.isRequired,
};

export default Display;
