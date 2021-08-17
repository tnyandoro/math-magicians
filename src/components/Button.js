import React, { Component } from 'react';
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  render() {
    const { name } = this.props;
    return (
      <button type="button" className="button">
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
