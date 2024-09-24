import { useParams } from "react-router-dom";

const PostPage = () => {
  const { subreddit, postId, postTitle } = useParams();
  const title = "Getting Post ...";
  const url = `https://www.reddit.com/r/${subreddit}/comments/${postId}/${postTitle}.json`;

  return (
    <>
      <h1>{title}</h1>
      <p>JSON URL: {url}</p>
    </>
  );
};

export default PostPage;
