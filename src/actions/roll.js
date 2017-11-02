export const ADD_ROLL = 'ADD_ROLL';

export const addRoll = ( roll ) => {
	return {
		type: ADD_ROLL,
		roll,
	};
};
