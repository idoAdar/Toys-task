import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import toysReducer from './reducers/toysReducer';

// Dev-tool
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

const rootReducer = combineReducers({
    toysReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;