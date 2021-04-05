// import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './FeedbackOptions.css';



const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
	return (

		<button type='button' className="Button"
			data-feedback={feedback} onClick={onLeaveFeedback} key={feedback}>
			{feedback}
		</button >


	)
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {

	return (

		options.map((option) =>
			FeedbackButton({ feedback: option, onLeaveFeedback }))
	)

}

FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string),
	onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions