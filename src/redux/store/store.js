import { createStore, applyMiddleware } from 'redux';
import { apiCallReducer } from '../reducers/reducer';
import thunk from 'redux-thunk';

const store = createStore(apiCallReducer, applyMiddleware(thunk));

export default store;