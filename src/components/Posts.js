import React from "react";
import {Post} from "./Post";
import {useSelector} from "react-redux";

export const Posts = () => {

    const {posts} = useSelector(state => state.posts)
    if (!posts.length) return <p className='text-center'>Постов пока нет</p>

    return posts.map(p => <Post key={p.id} post={p}/>)
}