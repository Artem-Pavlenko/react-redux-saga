import {CREATE_POST, FETCH_POST} from "./types";


const initState = {
    posts: [{title: '1', id: '1'}],
    fetchedPosts: []
}

export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_POST: {
            return {...state, posts: [...state.posts, action.payload]}
        }
        case FETCH_POST: {
            return {...state, fetchedPosts: action.payload}
        }
        default:
            return state
    }
}