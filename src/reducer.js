export default (state = {}, action) => {
	const newState = Object.assign({}, state);
	switch(action.type) {
		case "INCREMENT_COUNTER" :
			newState.count++;
			return newState;
		case "DECREMENT_COUNTER" :
			newState.count--;
			return newState;
		default:
			return newState;
	}
};
