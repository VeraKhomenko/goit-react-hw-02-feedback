
import React from 'react';
import PropTypes from 'prop-types'
import './Section.css';

const Section = ({ title, children }) => {
	return (
		<section>
			<h1 className="Container__title"> {title}</h1>


			{children}
		</section >
	)
}
Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
}
export default Section