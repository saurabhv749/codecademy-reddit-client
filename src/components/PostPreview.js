import { Link } from "react-router-dom";
import PostMedia from "./PostMedia";
import Upvotes from "./Upvotes";
import { PostFooter, PostHeader } from "./Post";
import "../styles/post.css";

const PostPreview = ({ post }) => {
  const {
    ups,
    subreddit_name_prefixed,
    num_comments,
    created,
    author,
    title,
    permalink,
    medias,
  } = post;

  // client side routing with permalink
  const postLink = permalink.replace("r/", "r/community/");

  return (
    <article className="post animate__animated animate__fadeInUp">
      <div className="post__content">
        <PostHeader subredditName={subreddit_name_prefixed}>
          <Link to={postLink} aria-label={`view post : ${title}`} title={title}>
            <h2 className="post__title">{title}</h2>
          </Link>
        </PostHeader>

        <Link
          to={postLink}
          className="post__image-container"
          aria-label={`view post : ${title}`}
          title={title}
        >
          {medias?.map((media, _) => (
            <PostMedia key={_} {...media} preview={true} />
          ))}
        </Link>

        <PostFooter
          author={author}
          created={created}
          num_comments={num_comments}
        />
      </div>
      <Upvotes ups={ups} />
    </article>
  );
};
export default PostPreview;
