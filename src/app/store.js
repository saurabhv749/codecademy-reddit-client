import { configureStore } from "@reduxjs/toolkit";
import TopicsReducer from "../features/topics/topicsSlice";
import SearchReducer from "../features/search/searchSlice";
import PostReducer from "../features/post/postSlice";

const store = configureStore({
  reducer: {
    topics: TopicsReducer,
    search: SearchReducer,
    post: PostReducer,
  },
});

export default store;
