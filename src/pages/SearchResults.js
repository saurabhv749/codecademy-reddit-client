import { useSearchParams } from "react-router-dom";
import SearchResults from "../features/search/SearchResults";

const SearchResultsPage = () => {
  const [params] = useSearchParams();
  const searchTerm = params.get("q");
  const title = `Search results for '${searchTerm}'`;
  const url = `https://www.reddit.com/search.json?q=${searchTerm}`;

  return (
    <>
      <SearchResults title={title} url={url} />
    </>
  );
};

export default SearchResultsPage;
