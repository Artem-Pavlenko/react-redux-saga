import {CREATE_POST} from "./types";

// postReducer
export const createPost = post => ({type: CREATE_POST, payload: post})