import { useSearchParams } from "react-router-dom";

const SearchResultsPage = () => {
  const [params] = useSearchParams();
  const searchTerm = params.get("q");
  const title = `Search results for '${searchTerm}'`;
  const url = `https://www.reddit.com/search.json?q=${searchTerm}`;

  return (
    <>
      <h1>{title}</h1>
      <p>JSON URL: {url}</p>
    </>
  );
};

export default SearchResultsPage;
