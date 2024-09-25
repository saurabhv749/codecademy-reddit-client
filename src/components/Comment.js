import "../styles/comment.css";

const Comment = (props) => {
  const { body, author, created } = props;
  return (
    <div className="comment animate__animated animate__fadeInUp animate__delay-1s">
      <div className="comment__meta">
        <p className="comment__meata-author">{author}</p>
        <p className="comment__meata-time">{created}</p>
      </div>
      <p className="comment__body">{body}</p>
    </div>
  );
};
export default Comment;
