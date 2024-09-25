import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostPreview from "./PostPreview";

const PostList = ({
  title,
  url,
  postsFetcher,
  postsSelector,
  errorSelector,
  statusSelector,
}) => {
  const dispatch = useDispatch();
  const hasError = useSelector(errorSelector);
  const status = useSelector(statusSelector);
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(postsFetcher(url));
  }, [dispatch, postsFetcher, url]);

  if (hasError) {
    return (
      <section className="post__items">
        <h1>Error: {hasError}</h1>
      </section>
    );
  }

  if (status === "loading") {
    return (
      <section className="post__items">
        <h1>{title}</h1>
        <p>Loading....</p>
      </section>
    );
  }
  // console.log(posts);
  if (status === "succeeded") {
    return (
      <section className="post__items">
        <h1>{title}</h1>
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </section>
    );
  }
};

export default PostList;
