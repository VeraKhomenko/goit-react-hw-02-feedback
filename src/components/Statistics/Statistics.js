import React from 'react';
import PropTypes from 'prop-types'
import Notification from '../Notification';
import './Statistics.css';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<>
			{total > 0 && (
				<ul className="Statistics__list">
					<li key='good'>Good: {good}</li>
					<li key='neutral'>Neutral: {neutral}</li>
					<li key='bad'>Bad: {bad}</li>
					<li key='total'>Total: {total}</li>
					<li key='positivePercentage'>Positive Percentage: {positivePercentage}</li>
				</ul>
			)}
			{total === 0 && <Notification message="No feedback given" />
			}
		</>
	)
}
Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
}

export default Statistics