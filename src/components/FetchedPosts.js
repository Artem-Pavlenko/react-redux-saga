import React from "react";
import {Post} from "./Post";

export const FetchedPosts = ({posts}) => {

    if (!posts.length) return <button className='btn btn-primary'>Download</button>

    return posts.map(p => <Post key={p} post={p}/>)
}