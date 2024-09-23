import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatPostData } from "../../utils";

export const fetchPost = createAsyncThunk("post/fetchPost", async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const formatedData = formatPostData(data);
      return formatedData;
    }
  } catch (error) {
    throw new Error(error);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: {
      post: {},
      comments: [],
    },
    status: "idle",
    error: null,
  },
  reducers: {
    upvotePost: (state) => {
      state.post.ups += 1;
    },
    downvotePost: (state) => {
      state.post.ups -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPost = (state) => state.post.post; // rootPost(store),sliceName,sliceState
export const selectStatus = (state) => state.post.status;
export const selectError = (state) => state.post.error;

export const { downvotePost, upvotePost } = postSlice.actions;

export default postSlice.reducer;
