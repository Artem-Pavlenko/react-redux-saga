import {CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "./types";

// postReducer
export const createPost = post => ({type: CREATE_POST, payload: post})
export const fetchPost = post => ({type: FETCH_POST, payload: post})

// appReducer
export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})
export const showAlert = (text) => ({type: SHOW_ALERT, payload: text})
export const hideAlert = () => ({type: HIDE_ALERT})