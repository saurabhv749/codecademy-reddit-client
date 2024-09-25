import { BiComment } from "react-icons/bi";
import PostMedia from "./PostMedia";
import { formatCount } from "../utils";
import Upvotes from "./Upvotes";
import "../styles/post.css";

export const PostFooter = ({ author, created, num_comments }) => (
  <div className="post__footer">
    <div className="post__author">
      <span className="post__author-name">{author}</span>
    </div>
    <div className="post__meta">
      <span className="post__time">{created}</span>
    </div>
    <div className="post__comments">
      <span className="comments">
        <BiComment size={20} />
      </span>
      <span>{formatCount(num_comments)}</span>
    </div>
  </div>
);

export const PostHeader = ({ subredditName, children }) => (
  <header className="post__header">
    <p className="post__topic">{subredditName}</p>
    {children}
  </header>
);

const Post = ({ post }) => {
  const {
    ups,
    subreddit_name_prefixed,
    num_comments,
    created,
    author,
    title,
    medias,
  } = post;

  return (
    <article className="post animate__animated animate__fadeIn">
      <div className="post__content">
        <PostHeader subredditName={subreddit_name_prefixed}>
          <h1>{title}</h1>
        </PostHeader>

        <section className="post__image-container">
          {medias?.map((media, _) => (
            <PostMedia key={_} {...media} preview={false} />
          ))}
        </section>
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
export default Post;
