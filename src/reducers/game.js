import { ADD_ROLL } from '../actions/roll';

const defaultState = {
	frames: [],
};

export default ( state = defaultState, action ) => {
	switch ( action.type ) {
		case ADD_ROLL:
			let frames = [];
			if ( state.frames.length === 0 ) {
				// If there aren't any recorded frames, we're at the beginning of the game. Easy peasy.
				frames.push( [ action.roll ] );
			} else {
				frames = state.frames.slice( 0 );
				const lastFrame = frames.slice( -1 )[ 0 ];

				if ( frames.length === 10 ) {
					// The tenth frame allows three rolls in limited circumstances. But, for now, let's just add this roll.
					lastFrame.push( action.roll );
					// Now, replace the tenth frame with this new one.
					frames[ 9 ] = lastFrame;
				} else if ( lastFrame.length === 2 || lastFrame[ 0 ] === 10 ) {
					// If the last frame has two rolls, or it has a single roll of 10 (a strike), start a new one.
					frames.push( [ action.roll ] );
				} else {
					// Add this roll to the last frame.
					lastFrame.push( action.roll );
					// And replace the last frame with this one.
					frames[ frames.length - 1 ] = lastFrame;
				}
			}
			return Object.assign( {}, state, { frames } );
		default:
			return state;
	}
};
