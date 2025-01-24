// Importing the configureStore utility from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importing the authReducer from the authentication slice
import authReducer from './features/auth/authSlice';
// Importing the baseApi created with Redux Toolkit Query
import { baseApi } from './api/baseApi';

/**
 * Creating the Redux store using configureStore.
 *
 * - Combines all reducers and middleware into a single store.
 * - Integrates Redux Toolkit Query's API middleware for handling API calls.
 */
export const store = configureStore({
  // Adding reducers to the store
  reducer: {
    // Reducer for API state and caching (auto-managed by Redux Toolkit Query)
    [baseApi.reducerPath]: baseApi.reducer,

    // Reducer for authentication state
    auth: authReducer,
  },

  // Adding middleware to the store
  // - getDefaultMiddlewares: Returns default middleware provided by Redux Toolkit
  // - baseApi.middleware: Adds middleware for managing API calls (caching, invalidation, etc.)
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

/**
 * Inferring types for the Redux store:
 *
 * RootState:
 * - Represents the complete state of the Redux store.
 * - Automatically inferred from the store configuration, providing type safety for state access.
 *
 * AppDispatch:
 * - Represents the dispatch function for the Redux store.
 * - Automatically inferred to include all action types, ensuring type safety when dispatching actions.
 */

// Infer the `RootState` type from the store itself
// This is used to type-check the global state throughout the application
export type RootState = ReturnType<typeof store.getState>;

// Infer the `AppDispatch` type from the store itself
// This ensures type safety for all dispatch actions used in the app
export type AppDispatch = typeof store.dispatch;
