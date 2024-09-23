import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatListings } from "../../utils";

export const fetchPostsByTopic = createAsyncThunk(
  "topic/fetchPostsByTopic",
  async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const listings = await response.json();
        const formatedData = formatListings(listings.data.children);
        return formatedData;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
);

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsByTopic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsByTopic.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPostsByTopic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPosts = (state) => state.topics.posts;
export const selectStatus = (state) => state.topics.status;
export const selectError = (state) => state.topics.error;

export default topicsSlice.reducer;
