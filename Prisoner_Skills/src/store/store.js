import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import { reducer as PrisonReducer } from "../reducers/prisonReducer" ;

const rootReducer = combineReducers({
    prison: PrisonReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default Store;