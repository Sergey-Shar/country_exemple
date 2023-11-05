import { createAsyncThunk } from "@reduxjs/toolkit";
import countriesApi from "../../shared/api/countries";

export const fetchCountriesThunk = createAsyncThunk(
 'countries/fetchCountries',
 async () => {
    const response = await countriesApi.fetchAll()
				return response
 }
)