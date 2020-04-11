import { createStore } from 'redux';

const initialState = {
    age : 20
}
const Reducer = (state = initialState, action) => {
    let newState = {...state};
    if(action.type === 'ADD'){
        newState.age += 1;
    }
    return newState;
}
const store = createStore(Reducer);
store.subscribe( () => {
    console.log(store.getState());
})
store.dispatch({type:'ADD'});


