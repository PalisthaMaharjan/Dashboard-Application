import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import filtersReducer from './slices/filterSlice';
import paginationReducer from './slices/paginationSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: filtersReducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['users/fetchUsers/fulfilled'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;