import {combineReducers, compose, createStore} from "redux";
import {postsReducer} from "./postsReducer";

const reducers = combineReducers({
    posts: postsReducer
})

export const store = createStore(reducers, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))