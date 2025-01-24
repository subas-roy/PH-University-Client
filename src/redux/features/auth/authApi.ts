// Importing the base API instance created using Redux Toolkit Query
import { baseApi } from '../../api/baseApi';

/**
 * Extending the baseApi with authentication-related endpoints.
 * injectEndpoints allows us to add specific API endpoints to an existing API slice.
 */
const authApi = baseApi.injectEndpoints({
  // Define the endpoints for authentication
  endpoints: (builder) => ({
    // Login endpoint: Handles user authentication
    // - builder.mutation is used for operations that cause a side effect (e.g., POST, PUT, DELETE)
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/login', // API endpoint for login
        method: 'POST', // HTTP method to use for the request
        body: userInfo, // Payload to be sent in the body of the request (user credentials)
      }),
    }),
  }),
});

// Exporting the generated hook for the login mutation
// - useLoginMutation is a React hook to trigger the login mutation and manage its state (e.g., isLoading, error)
export const { useLoginMutation } = authApi;
