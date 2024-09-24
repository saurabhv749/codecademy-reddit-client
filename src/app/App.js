import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import HomePage from "../pages/Home";
import PostPage from "../pages/Post";
import SearchResultsPage from "../pages/SearchResults";
import CommunityPage from "../pages/Community";
import "../styles/app.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="r/popular" element={<HomePage />} />
      <Route path="r/search" element={<SearchResultsPage />} />
      <Route path="r/community/:subreddit" element={<CommunityPage />} />
      <Route
        path="r/community/:subreddit/comments/:postId/:postTitle/"
        element={<PostPage />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
