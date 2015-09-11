import { createStore } from 'redux';

const store = createStore((state = 0, action) => {
	switch(action.type) {
		case "INCREMENT_COUNTER" :
			return state + 1;
		case "DECREMENT_COUNTER" :
			return state - 1;
		default:
			return state;
	}
}, 0);

export default store;
