import { useParams } from "react-router-dom";
import { COMMUNITIES } from "../config";
import TopicPosts from "../features/topics/TopicPosts";

const CommunityPage = () => {
  const { subreddit } = useParams();
  const currentCommunity = COMMUNITIES.find((x) => x.subreddit === subreddit);
  const url = `https://www.reddit.com/r/${subreddit}.json`;

  return (
    <>
      <TopicPosts topic={currentCommunity.topic} url={url} />
    </>
  );
};

export default CommunityPage;
