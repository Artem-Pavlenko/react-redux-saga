import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import {postsReducer} from "./postsReducer";
import {appReducer} from "./appReducer";
import {forbiddenWordsMiddleware} from "./middleware";

const reducers = combineReducers({
    posts: postsReducer,
    app: appReducer
})

export const store = createStore(reducers, compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))