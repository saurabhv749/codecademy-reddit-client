import {
  fetchSearchResults,
  selectError,
  selectStatus,
  selectSearchResults,
} from "./searchSlice";
import PostList from "../../components/PostList";

const SearchResults = ({ title, url }) => {
  return (
    <PostList
      title={title}
      url={url}
      postsFetcher={fetchSearchResults}
      statusSelector={selectStatus}
      errorSelector={selectError}
      postsSelector={selectSearchResults}
    />
  );
};
export default SearchResults;
