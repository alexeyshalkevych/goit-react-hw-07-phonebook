import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import Thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import contactsReducer from './contacts/contactsReducer';
import filterReducer from './filter/filterReducer';
import loaderReducer from './loader/loaderReducer';
import errorReducer from './error/errorReducer';
import rootSaga from './contacts/contactsSaga';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});

const sagaMiddleware = createSagaMiddleware();

// const enhancer = applyMiddleware(Thunk);
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

sagaMiddleware.run(rootSaga);

export default store;
