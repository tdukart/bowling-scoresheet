import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import String from '../String';
import style from './style.css';

class Scoreboard extends React.Component {
	static get propTypes() {
		return {
			frames: PropTypes.array.isRequired,
		};
	}

	render() {
		return (
			<table className={style.scoreboard}>
				<thead>
				<tr>
					<th>Name</th>
					<th>1</th>
					<th>2</th>
					<th>3</th>
					<th>4</th>
					<th>5</th>
					<th>6</th>
					<th>7</th>
					<th>8</th>
					<th>9</th>
					<th>10</th>
					<th>Total</th>
				</tr>
				</thead>
				<tbody>
				<String frames={this.props.frames}/>
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = ( state ) => {
	const { frames } = state.game;

	return {
		frames
	};
};

export default connect( mapStateToProps )( Scoreboard );
