import {
  BiDownvote,
  BiSolidDownvote,
  BiUpvote,
  BiSolidUpvote,
} from "react-icons/bi";
import { formatCount } from "../utils";
import { useState } from "react";
import "../styles/upvotes.css";

const Upvotes = ({ ups }) => {
  const [userVote, setUserVote] = useState(0);
  const upvote = () => {
    const newVote = userVote !== 1 ? 1 : 0;
    setUserVote(newVote);
  };
  const downvote = () => {
    const newVote = userVote !== -1 ? -1 : 0;
    setUserVote(newVote);
  };

  let voteingClassName =
    userVote === 1
      ? "post__voting upvoted"
      : userVote === -1
      ? "post__voting downvoted"
      : "post__voting";

  return (
    <div className={voteingClassName}>
      <button
        className="post__vote-button button-upvote"
        aria-label="Upvote"
        onClick={upvote}
      >
        {userVote === 1 ? <BiSolidUpvote size={24} /> : <BiUpvote size={24} />}
      </button>
      <span className="post__vote-count">{formatCount(ups + userVote)}</span>
      <button
        className="post__vote-button button-downvote"
        aria-label="Downvote"
        onClick={downvote}
      >
        {userVote === -1 ? (
          <BiSolidDownvote size={24} />
        ) : (
          <BiDownvote size={24} />
        )}
      </button>
    </div>
  );
};
export default Upvotes;
