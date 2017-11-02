import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

class Frame extends React.Component {
	static get propTypes() {
		return {
			rolls: PropTypes.array.isRequired,
			isTenth: PropTypes.bool.isRequired,
			subtotal: PropTypes.number.isRequired,
		};
	}

	render() {
		const { rolls, isTenth, subtotal } = this.props;
		let rollDisplay = [];
		for ( let rollIndex = 0; rollIndex < (isTenth ? 3 : 2); rollIndex++ ) {
			let rollValue = (rolls.length > rollIndex) ? rolls[ rollIndex ] : '';
			rollDisplay.push(
				<div className={style.roll} key={`roll-${rollIndex}`}>
					{rollValue}
				</div>
			);
		}

		let subtotalDisplay = (subtotal.scoreComplete) ? subtotal.subtotal : '';

		return (
			<td className={style.frame}>
				{rollDisplay}
				<div className={style.subtotal}>
					{subtotalDisplay}
				</div>
			</td>
		);
	}
}

export default Frame;
