import {CREATE_POST, FETCH_POST} from "./types";
import {fetchPost, hideLoader, showLoader} from "./actions";


const initState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_POST: {
            return {...state, posts: [...state.posts, action.payload]}
        }
        case FETCH_POST: {
            return {...state, fetchedPosts: [...state.fetchedPosts, ...action.payload]}
        }
        default:
            return state
    }
}

