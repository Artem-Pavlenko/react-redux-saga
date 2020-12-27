import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {postsReducer} from "./postsReducer";
import {appReducer} from "./appReducer";
import {forbiddenWordsMiddleware} from "./middleware";
import {sagaWatcher} from "./sagas";

const saga = createSagaMiddleware()

const reducers = combineReducers({
    posts: postsReducer,
    app: appReducer
})

export const store = createStore(reducers, compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)