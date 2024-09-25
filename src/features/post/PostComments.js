import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPost, selectError, selectStatus, fetchPost } from "./postSlice";
import Post from "../../components/Post";
import Comment from "../../components/Comment";

const PostComments = ({ title, url }) => {
  const dispatch = useDispatch();

  const { post, comments } = useSelector(selectPost);
  const hasError = useSelector(selectError);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchPost(url));
  }, [dispatch, url]);

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
      </section>
    );
  }

  if (status === "succeeded")
    return (
      <section className="post__items">
        <Post post={post} />
        <div className="comments__container">
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </div>
      </section>
    );
};
export default PostComments;
