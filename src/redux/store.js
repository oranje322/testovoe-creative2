import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/rootReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
        rootReducer
    }
), composeEnhancers(  applyMiddleware(thunk)));

window.store = store;

export default store