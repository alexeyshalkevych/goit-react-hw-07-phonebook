import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import contactsReducer from './contacts/contactsReducer';
import filterReducer from './filter/filterReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const enhancer = applyMiddleware(Thunk);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
