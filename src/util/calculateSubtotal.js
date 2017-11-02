const calculateSubtotal = ( prevSubtotal = 0, frame = [], nextFrames = [] ) => {
	let frameScore = 0,
		scoreComplete = true;
	if ( frame.length ) {
		if ( frame[ 0 ] === 10 ) {
			frameScore = 10;
			// Add the next two rolls.
			if ( nextFrames.length ) {
				if ( nextFrames[ 0 ][ 0 ] === 10 ) {
					// The next frame is another strike, so add 10
					frameScore += 10;
					// and the next roll
					if ( nextFrames.length > 1 && nextFrames[ 1 ].length ) {
						frameScore += nextFrames[ 1 ][ 0 ];
					} else {
						scoreComplete = false;
					}
				} else if ( nextFrames[ 0 ].length ) {
					frameScore += nextFrames[ 0 ][ 0 ];
					if ( nextFrames[ 0 ].length > 1 ) {
						frameScore += nextFrames[ 0 ][ 1 ];
					} else {
						scoreComplete = false;
					}
				} else {
					scoreComplete = false;
				}
			}
		} else if ( frame.length > 1 && frame[ 0 ] + frame[ 1 ] === 10 ) {
			frameScore = 10;
			// Add the next roll.
			if ( nextFrames.length ) {
				frameScore += nextFrames[ 0 ][ 0 ];
			} else {
				scoreComplete = false;
			}
		} else {
			if ( frame.length > 1 ) {
				frameScore = frame[ 0 ] + frame[ 1 ];
			} else if ( frame.length === 1 ) {
				frameScore = frame[ 0 ];
				scoreComplete = false;
			} else {
				frameScore = 0;
				scoreComplete = false;
			}
		}
	} else {
		scoreComplete = false;
	}
	return {
		subtotal: prevSubtotal + frameScore,
		scoreComplete
	};
};

export default calculateSubtotal;
