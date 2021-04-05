import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Layout from './components/Layout';
import { FEEDBACK_OPTIONS } from './data/constants';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset
    this.setState(prevState => ({ [ feedback ]: prevState[ feedback ] + 1 }))
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    const total = this.countTotalFeedback()
    return total ? Math.round((good / total) * 100) : 0
  }
  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    return (
      <Layout>

        <Section title='Please leave feedback'>

          <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>

      </Layout>




    );
  }

}
export default App;
