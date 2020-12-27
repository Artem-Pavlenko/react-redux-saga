import {CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

// postReducer
export const createPost = post => ({type: CREATE_POST, payload: post})
export const fetchPost = post => ({type: FETCH_POST, payload: post})
export const fetchPostThunk = () => async (dispatch) => {
    try {
        dispatch(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const postsJson = await response.json()
        dispatch(fetchPost(postsJson))
        dispatch(hideLoader())
    } catch (e) {
        dispatch(showAlert('Something\'s wrong'))
        dispatch(hideLoader())
    }

}

// appReducer
export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})
export const showAlert = (text) => ({type: SHOW_ALERT, payload: text})
export const advancedShowAlert = (text) => (dispatch) => {
    dispatch({type: SHOW_ALERT, payload: text})
    setTimeout(() => {
        dispatch(hideAlert())
    }, 5000)
}
export const hideAlert = () => ({type: HIDE_ALERT})