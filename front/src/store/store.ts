import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createApi } from './api';
import { reducers } from './root-reducer';

export const api = createApi()
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
