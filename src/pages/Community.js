import { useParams } from "react-router-dom";
import { COMMUNITIES } from "../config";

const CommunityPage = () => {
  const { subreddit } = useParams();
  const currentCommunity = COMMUNITIES.find((x) => x.subreddit === subreddit);
  const url = `https://www.reddit.com/r/${subreddit}.json`;

  return (
    <>
      <h1>{currentCommunity.topic}</h1>
      <p>JSON URL: {url}</p>
    </>
  );
};

export default CommunityPage;
