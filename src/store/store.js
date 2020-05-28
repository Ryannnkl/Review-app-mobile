import { createStore } from 'redux';

const INITIAL_STATE = { 
  confirm: false  
}

function reducer(state = INITIAL_STATE,action){
  switch(action.type){
    case 'SHOW_POP':
      return { ...state, confirm: !state.confirm }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;