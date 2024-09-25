import { useParams } from "react-router-dom";
import PostComments from "../features/post/PostComments";

const PostPage = () => {
  const { subreddit, postId, postTitle } = useParams();
  const title = "Getting Post ...";
  const url = `https://www.reddit.com/r/${subreddit}/comments/${postId}/${postTitle}.json`;

  return (
    <>
      <PostComments title={title} url={url} />
    </>
  );
};

export default PostPage;
