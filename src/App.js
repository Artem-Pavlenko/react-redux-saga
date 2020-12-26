import React from "react";
import {Posts} from "./components/Posts";
import {FetchedPosts} from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import {useSelector} from "react-redux";
import {Loader} from "./assets/Loader";

function App() {

    const {loading} = useSelector(state => state.app.loading)

    if (loading) return <Loader/>

    return (
        <div className='container pt-3'>
            <div className='row'>
                <div className='col'>
                    <PostForm/>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <h2>Synchronous posts</h2>
                    <Posts/>
                </div>
                <div className='col'>
                    <h2>Asynchronous posts</h2>
                    <FetchedPosts/>
                </div>
            </div>
        </div>
    );
}

export default App;
