import { createStore, applyMiddleware } from "redux";
import Axios from 'axios';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
const initialState = 'test';

const GET_MSG_API = 'GET_MSG_API'

let baseUrl = 'v1/greetings.json'

export const getMessages = () => async (dispatch) => {
  const response = await Axios.get(baseUrl);
  let messageObj = {message: response.data.greeting}
  dispatch({
    type: GET_MSG_API,
    payload: messageObj,
  });
}

function rootReducer(state= initialState, action) {
  switch (action.type) {
    case GET_MSG_API:
    return action.payload;
    default: 
    return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer,initialState, applyMiddleware(thunk, Logger));
  return store;
}
