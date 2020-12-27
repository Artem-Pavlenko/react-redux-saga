import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_POSTS} from "./types";
import {fetchPost, hideLoader, showLoader} from "./actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
    yield put(showLoader())
    const payload = yield call(fetchPostsS)
    yield put(fetchPost(payload))
    yield put(hideLoader())
}

async function fetchPostsS() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}