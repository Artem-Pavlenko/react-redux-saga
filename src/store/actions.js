import {CREATE_POST, FETCH_POST} from "./types";

// postReducer
export const createPost = post => ({type: CREATE_POST, payload: post})
export const fetchPost = post => ({type: FETCH_POST, payload: post})