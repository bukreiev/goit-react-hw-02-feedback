import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import Button from 'components/Button';


export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={css.controls}>
        {options.map(option => (
          <Button key={option} text={option} feedbackClick={onLeaveFeedback} />
        ))}
      </div>
    );
  }
};

