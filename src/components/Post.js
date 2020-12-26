import React from "react";

export const Post = ({postTitle}) => {

    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{postTitle}</h5>
            </div>
        </div>
    )
}
