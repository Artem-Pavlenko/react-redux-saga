import {CREATE_POST} from "./types";


const initState = {
    posts: [{title: '1', id: '1'}],
    fetchedPosts: []
}

export const postsReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_POST: {
            return {...state, posts: [...state.posts, action.payload]}
        }
        default:
            return state
    }
}