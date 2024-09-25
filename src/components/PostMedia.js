const PostMedia = ({ type, url, selftext, preview }) => {
  if (type === "image")
    return (
      <img src={url} alt="post media" className="post__image" loading="lazy" />
    );

  if (type === "video")
    return (
      <video
        controls
        playsInline
        src={url}
        alt="post media"
        className="post__video"
        preload="metadata"
      />
    );

  const body = preview ? selftext.slice(0, 300) + "..." : selftext;

  return <p className="post__text">{body}</p>;
};
export default PostMedia;
