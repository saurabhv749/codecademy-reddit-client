import {
  fetchPostsByTopic,
  selectError,
  selectStatus,
  selectPosts,
} from "./topicsSlice";
import PostList from "../../components/PostList";

const TopicPosts = ({ topic, url }) => {
  return (
    <PostList
      title={topic}
      url={url}
      postsFetcher={fetchPostsByTopic}
      postsSelector={selectPosts}
      statusSelector={selectStatus}
      errorSelector={selectError}
    />
  );
};
export default TopicPosts;
