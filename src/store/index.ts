import { configureStore } from '@reduxjs/toolkit';
import { charactersAPI } from './API/CharactersAPI';

export const store = configureStore({
  reducer: {
    [charactersAPI.reducerPath]: charactersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
