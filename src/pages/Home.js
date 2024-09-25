import TopicPosts from "../features/topics/TopicPosts";

const HomePage = () => {
  const subreddit = "r/popular";
  const url = `https://www.reddit.com/${subreddit}.json`;

  return (
    <>
      <TopicPosts topic="Popular" url={url} />
    </>
  );
};

export default HomePage;
