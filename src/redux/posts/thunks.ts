import { createAsyncThunk } from "@reduxjs/toolkit";
import postsApi from "../../shared/api/posts";

export const fetchPostsThunk = createAsyncThunk(
 'countries/fetchCountries',
   async ({ limit, offset, searchParam = ''}: { limit: number; offset: number, searchParam: string }) => {
  const response = await postsApi.fetchAll(limit, offset, searchParam)
	return response
 }
)