import React, { Component } from "react";
import FeedbackOptions from './FeedbackOptions';
import Statistics from "./Statistics";
import Notification from "./Notification";
import Section from "./Section";


export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  getKeys = () => Object.keys(this.state);
  
  countTotal = () => (this.state.good + this.state.neutral + this.state.bad);

  countPercentage = () => {
     if (!this.state.good && !this.state.neutral && !this.state.bad) return 0;
      else { return Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100); }
  } 

  feedbackClick = (event) => {
      const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
        className="container"
      >
        <h1 className="main__title">Expresso Cafe Feedback Page</h1>

        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={this.getKeys()}
            onLeaveFeedback={this.feedbackClick} />
        </Section>
        
        <Section title="Statistics">
          {this.countTotal() ?
            (<Statistics good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotal()}
              positivePercentage={this.countPercentage()} />)
            : (<Notification message="There is no feedback" />)
          }
        </Section>
      </div>
    );
  };
}
