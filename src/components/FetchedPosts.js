import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Post} from "./Post";
import {Loader} from "../assets/Loader";
import {fetchPostThunk} from "../store/actions";

export const FetchedPosts = () => {

    const dispatch = useDispatch()
    const {fetchedPosts} = useSelector(state => state.posts)
    const loading = useSelector(state => state.app.loading)
    if (loading) return <Loader/>

    if (!fetchedPosts.length) return <button
        className='btn btn-primary'
        onClick={() => dispatch(fetchPostThunk())}
    >Download</button>

    return fetchedPosts.map(p => <Post key={p.id} postTitle={p.title}/>)
}