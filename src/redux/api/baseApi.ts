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
  // - fetchBaseQuery: Simplifies making HTTP requests using the fetch API
  // - baseUrl: The root URL for all API requests made through this base query
  // - credentials: 'include' ensures cookies are sent with requests for cross-origin requests
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1', // Base URL for API endpoints
    credentials: 'include', // Include credentials (e.g., cookies) for authenticated requests
  }),

  // Endpoints are defined here to manage specific API calls
  // Currently, it is empty and can be extended as needed
  endpoints: () => ({}),
});
