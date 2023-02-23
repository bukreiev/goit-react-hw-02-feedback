import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './button.module.css';


export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    feedbackClick: PropTypes.func.isRequired,
  };

  render() {
      const { text, feedbackClick } = this.props;
      return (
          <button
                type="button"
                className={css.controls__bnt}
                onClick={feedbackClick}
                name={text}>
                {text}
            </button>
      );
  }
}
