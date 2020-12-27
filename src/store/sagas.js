import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_POSTS} from "./types";
import {fetchPost, hideLoader, showAlert, showLoader} from "./actions";

// takeEvery перехватывает action.type (в даном примере REQUEST_POSTS) и выполняет sagaWorker
export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

// put() - диспатчит в стор  (dispatch(showLoader(), dispatch(fetchPost(payload)), dispatch(hideLoader()))
function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPostsS)
        yield put(fetchPost(payload))
        yield put(hideLoader())
    } catch (e) {
        yield put(showAlert('Something\'s wrong'))
        yield put(hideLoader())
    }
}

async function fetchPostsS() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}

// тоже самое в виде санки
// const fetchPostThunk = () => async (dispatch) => {
//     try {
//         dispatch(showLoader())
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
//         const postsJson = await response.json()
//         dispatch(fetchPost(postsJson))
//         dispatch(hideLoader())
//     } catch (e) {
//         dispatch(showAlert('Something\'s wrong'))
//         dispatch(hideLoader())
//     }
// }