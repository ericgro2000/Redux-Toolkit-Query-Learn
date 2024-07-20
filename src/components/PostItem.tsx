import React, {FC} from 'react';
import {IPost} from "../models/IPost";


interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post, }) => {

    const handleRemove = (event: React.MouseEvent) => {

    }

    const handleUpdate = (event: React.MouseEvent) => {
  
    }

    return (
        <div className="post" onClick={handleUpdate}>
            {post.id}. {post.title}
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;