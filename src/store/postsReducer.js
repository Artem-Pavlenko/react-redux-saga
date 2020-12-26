import {CREATE_POST, FETCH_POST} from "./types";
import {fetchPost} from "./actions";


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

export const fetchPostThunk = () => async (dispatch) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const postsJson = await response.json()
    dispatch(fetchPost(postsJson))
}