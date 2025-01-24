// Importing the configureStore utility from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importing the authReducer from the authentication slice
import authReducer from './features/auth/authSlice';

// Creating the Redux store using configureStore
// This allows for an easy setup of the Redux store with good defaults
export const store = configureStore({
  // Adding the auth reducer to the store
  // This will manage the state related to authentication under the 'auth' key
  reducer: {
    auth: authReducer,
  },
});

/**
 * Inferring types for the Redux store:
 *
 * RootState:
 * - Represents the complete state of the Redux store
 * - Inferred automatically from the store configuration
 *
 * AppDispatch:
 * - Represents the dispatch function for the store
 * - Inferred automatically to include the correct action types
 */

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
