import { createAsyncThunk } from "@reduxjs/toolkit";
import postsApi from "../../shared/api/posts";

export const fetchPostsThunk = createAsyncThunk(
 'countries/fetchCountries',
  async ({offset}: { offset: number }) => {
  const response = await postsApi.fetchAll(offset)
	return response
 }
)