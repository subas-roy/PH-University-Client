// Importing createApi and fetchBaseQuery from Redux Toolkit Query
// - createApi: Helps to define API endpoints and manage caching and fetching of data
// - fetchBaseQuery: A small wrapper around the standard fetch API for making requests
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Define the base API slice using createApi.
 * This slice will handle API requests, caching, and re-fetching.
 */
export const baseApi = createApi({
  // The name of the slice, used as a prefix for generated action types
  reducerPath: 'baseApi',

  // Configuring the base query function to define the base URL for API requests
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),

  // Endpoints are defined here to manage specific API calls
  // Currently, it is empty and can be extended as needed
  endpoints: () => ({}),
});
