import {createStore,applyMiddleware,combineReducers} from 'redux';
import videoReducer from './reducer/index';
import userReducer from './reducer/user';
import currentVideoReducer from './reducer/detailVideo';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({videoReducer,userReducer,currentVideoReducer})
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;