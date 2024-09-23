import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatListings } from "../../utils";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
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

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectSearchResults = (state) => state.search.searchResults;
export const selectStatus = (state) => state.search.status;
export const selectError = (state) => state.search.error;

export default searchSlice.reducer;
