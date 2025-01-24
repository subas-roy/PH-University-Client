// Importing the createSlice utility from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Defining the shape of the authentication state using TypeScript
// TAuthState has two properties:
// - user: Can either be null (when no user is logged in) or an object (when a user is logged in)
// - token: Can either be null (no token available) or a string (valid authentication token)
type TAuthState = {
  user: null | object; // Stores user information (e.g., name, email, etc.)
  token: null | string; // Stores the authentication token for secure API communication
};

// Initial state for the authentication slice
const initialState: TAuthState = {
  user: null, // By default, no user is logged in
  token: null, // By default, no token is available
};

// Create a slice for authentication-related state and actions
// A slice bundles the state and reducers for a specific feature
const authSlice = createSlice({
  name: 'auth', // The name of the slice (used as a prefix for action types)
  initialState, // The initial state defined above
  reducers: {
    // Action to set the user and token in the state
    // This is typically dispatched when a user logs in or when user info is fetched from an API
    setUser: (state, action) => {
      const { user, token } = action.payload; // Extract user and token from the action payload
      state.user = user; // Update the state with the new user information
      state.token = token; // Update the state with the new authentication token
    },

    // Action to log out the user
    // Resets the state to its initial values (user and token set to null)
    logout: (state) => {
      state.user = null; // Clear user information
      state.token = null; // Clear the authentication token
    },
  },
});

// Exporting the action creators generated by createSlice
// These will be used to dispatch actions in the application
export const { setUser, logout } = authSlice.actions;

// Exporting the reducer to be included in the store
// This will handle updates to the authentication state based on dispatched actions
export default authSlice.reducer;

/**
 * Usage example:
 *
 * import { setUser, logout } from './authSlice';
 *
 * // Dispatch setUser when logging in
 * dispatch(setUser({ user: { name: 'John Doe' }, token: 'abc123' }));
 *
 * // Dispatch logout when logging out
 * dispatch(logout());
 */
