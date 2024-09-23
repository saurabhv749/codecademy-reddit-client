// time
const calculateAge = (created) => {
  const diff = new Date() - new Date(created * 1000);
  let seconds = Math.floor(diff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let months = Math.floor(days / 30); // Average month length
  let years = Math.floor(days / 365.5); // Account for leap years

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;

  if (years > 0) return years + " year ago";
  else if (months > 0) return months + " month ago";
  else if (days > 0) return days + " days ago";
  else if (hours > 0) return hours + " hours ago";
  else if (minutes > 0) return minutes + " minutes ago";
};

const getMediaUrl = (imgUrl) => {
  let encoded = imgUrl.replace("amp;s", "s");
  let doubleEncoded = encoded.replace("amp;", "");
  let tripleEncoded = doubleEncoded.replace("amp;", "");
  return tripleEncoded;
};

// formatting
const getMedias = (post) => {
  const medias = [];

  if (post.is_video && post.post_hint === "hosted:video") {
    const media = post.media.reddit_video;
    medias.push({ type: "video", url: media.fallback_url });
  }
  if (post.post_hint === "image") medias.push({ type: "image", url: post.url });

  if (post.post_hint === "link")
    medias.push({
      type: "image",
      url: getMediaUrl(post.preview.images[0].source.url),
    });

  if (post.selftext) {
    medias.push({ type: "text", url: null, selftext: post.selftext });
  }

  return medias;
};

const formatCount = (count) =>
  count > 1000 ? (count / 1000).toFixed(2) + "K" : count;

const formatListing = (data) => ({
  url: data.url,
  upvote_ratio: data.upvote_ratio,
  ups: data.ups,
  subreddit_name_prefixed: data.subreddit_name_prefixed,
  subreddit_id: data.subreddit_id,
  subreddit: data.subreddit,
  preview: data.preview,
  permalink: data.permalink,
  num_comments: data.num_comments,
  id: data.id,
  created: calculateAge(data.created),
  author_fullname: data.author_fullname,
  author: data.author,
  title: data.title,
  thumbnail: data.thumbnail,
  medias: getMedias(data),
});

const formatListings = (posts) => {
  return posts.map((x) => formatListing(x.data));
};

const formatComments = (comments) => {
  return comments.map((comment) => ({
    id: comment.data.id,
    author: comment.data.author,
    authorFullname: comment.data.author_fullname,
    body: comment.data.body,
    created: calculateAge(comment.data.created),
  }));
};

const formatPostData = (data) => {
  let [postData, commentsData] = data;
  postData = postData.data.children[0].data;
  postData = formatListing(postData);
  commentsData = formatComments(commentsData.data.children);
  return { post: postData, comments: commentsData };
};
export { formatListings, formatPostData, formatCount };
