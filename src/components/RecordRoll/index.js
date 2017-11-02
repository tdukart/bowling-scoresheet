import React from 'react';
import { connect } from 'react-redux';

import { addRoll } from '../../actions/roll';
import style from './style.css';

class RecordRoll extends React.Component {
	render() {
		let rollButtons = [];
		for ( let rollIndex = 0; rollIndex < 10; rollIndex++ ) {
			rollButtons.push(
				<button key={rollIndex} onClick={this.props.onAddRoll.bind( this, rollIndex + 1 )}>
					{rollIndex + 1}
				</button>
			);
		}

		return (
			<div className={style.recordRoll}>
				{rollButtons}
			</div>
		);
	}
}

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		onAddRoll: ( roll ) => {
			dispatch( addRoll( roll ) );
		}
	};
};

export default connect( mapStateToProps, mapDispatchToProps )( RecordRoll );
