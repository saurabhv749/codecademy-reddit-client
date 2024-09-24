const HomePage = () => {
  const subreddit = "r/popular";
  const url = `https://www.reddit.com/${subreddit}.json`;

  return (
    <>
      <h1>Home</h1>
      <h2>Popular</h2>
      <p>JSON URL: {url}</p>
    </>
  );
};

export default HomePage;
