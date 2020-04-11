

const CounterReducer = (state=0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

export default CounterReducer;


// Reducer holds the functionality to modify state
// Action is a command