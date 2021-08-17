/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { render } from '@testing-library/react';

class Display extends Component {
  render() {
    const { output } = this.props;
    return (
      <div className="display">
        <p>{output}</p>
      </div>
    );
  }
}

Display.propTypes = {
  output: PropTypes.number.isRequired,
};

export default Display;
