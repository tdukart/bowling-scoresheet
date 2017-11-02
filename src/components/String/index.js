import React from 'react';
import PropTypes from 'prop-types';

import Frame from '../Frame';
import style from './style.css';
import calculateSubtotal from '../../util/calculateSubtotal';

class String extends React.Component {
	static get propTypes() {
		return {
			frames: PropTypes.array.isRequired,
		};
	}

	render() {
		const { frames } = this.props;
		let framesDisplay = [],
			subtotal = 0;
		for ( let frameIndex = 0; frameIndex < 10; frameIndex++ ) {
			let rolls = [];
			if ( frames.length > frameIndex ) {
				rolls = frames[ frameIndex ];
			}
			subtotal = calculateSubtotal( subtotal.subtotal, rolls, frames.slice( frameIndex + 1 ) );
			framesDisplay.push( <Frame rolls={rolls} subtotal={subtotal} isTenth={frameIndex === 9}/> );
		}

		return (
			<tr className={style.string}>
				<td>
					Todd
				</td>
				{framesDisplay}
				<td>
					{subtotal.subtotal}
				</td>
			</tr>
		);
	}
}

export default String;
