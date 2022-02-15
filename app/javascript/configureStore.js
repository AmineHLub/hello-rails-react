import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
const initialState = 'test';

const GET_MSG_API = 'GET_MSG_API'

export const getMessages = () => {
  return{
    type: GET_MSG_API
  } 
}

function rootReducer(state= initialState, action) {
  switch (action.type) {
    case GET_MSG_API:
    return 'Xello';
    default: 
    return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk, Logger));
  return store;
}
