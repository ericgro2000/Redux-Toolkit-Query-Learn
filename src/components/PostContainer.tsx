
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";


const PostContainer = () => {
    
    const {data: posts, error, isLoading, refetch} =  postAPI.useFetchAllPostsQuery(5)

    return (
        <div>
            <div className="post__list">
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;